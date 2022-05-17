class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/:id
  def show
    user = find_user
    render json: user
  end

  # POST /users
  def create
    new_user = User.create!(user_params)
    render json: new_user, status: :created
  end

  # UPDATE /users/:id
  def update
    user = find_user
    user.update!(user_params)
    render json: user
  end

  # DELETE /users/:id
  def destroy
    user = find_user
    user.destroy
    render json: {}
  end

  private

  def user_params
    params.permit(:name, :username, :password_digest, :about)
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
