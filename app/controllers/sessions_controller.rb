class SessionsController < ApplicationController
  def create
    # responds to POST login request

    puts user = User.find_by(username: params[:username])

    # checks if user exists AND is authenticated:
    if user&.authenticate(params[:password])
      # creates a new session, saving user id as session id
      puts session[:user_id] = user.id

      # redirect
      # redirect_to root_path, notice: 'Logged in successfully'
      render json: user, status: :created
    else
      render json: {
               error: {
                 login: 'Invalid username or password',
               },
             },
             status: :unauthorized
    end
  end

  def destroy
    # responds to DELETE logout request
    session.delete :user_id

    # redirect
    # redirect_to root_path, notice: 'Logged Out'
    head :no_content
  end
end
