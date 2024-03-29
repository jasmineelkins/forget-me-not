class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # POST /users
  def create
    # debugger

    puts user_params

    # create new User & save hashed password to db
    user = User.create!(user_params)

    # save user's ID in the session hash
    session[:user_id] = user.id

    # return user object json
    render json: user, status: :created
  end

  # GET /users/:id
  def show
    # if User authenticated, return user obj
    # puts session[:user_id]

    current_user = User.find_by(id: session[:user_id])

    if current_user
      render json: current_user
    else
      render json: { error: '* No Current User *' }, status: :unauthorized
    end
  end

  # UPDATE /users/:id
  def update
    # get current user
    current_user = User.find_by(id: session[:user_id])

    if current_user
      current_user.update!(user_params)
      render json: current_user
    else
      render json: {
               error: 'Something went wrong',
             },
             status: :internal_server_error
    end
  end

  # DELETE /users/:id
  def destroy
    user = find_user
    user.destroy
    render json: {}
  end

  # send User test email
  def send_test_email
    @current_user = User.find_by(id: session[:user_id])

    UserTestMailer.send_test_email(@current_user).deliver if @current_user
  end

  private

  def user_params
    params.permit(
      :name,
      :username,
      :password,
      :password_digest,
      :password_confirmation,
      :about,
      :location,
      :birthday,
      :email,
      :receive_newsletter,
    )
  end

  def find_user
    User.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
