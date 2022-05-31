class NewslettersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # GET /newsletters
  def index
    newsletters = Newsletter.all
    render json: newsletters, include: :articles
  end

  # GET /newsletters/:id
  def show
    newsletter = find_newsletter
    render json: newsletter, include: :articles
  end

  # POST /newsletters
  def create
    # puts session[:user_id]

    # make sure user id comes from session:
    # newsletter_params[:user_id] = session[:user_id] -HOW?

    new_newsletter = Newsletter.create!(newsletter_params)
    render json: new_newsletter, status: :created
  end

  # UPDATE /newsletters/:id
  def update
    newsletter = find_newsletter
    newsletter.update!(newsletter_params)
    render json: newsletter
  end

  # DELETE /newsletters/:id
  def destroy
    newsletter = find_newsletter
    newsletter.destroy
    render json: {}
  end

  # send test email
  def send_current_newsletter
    @current_user = User.find_by(id: session[:user_id])

    # @message = 'Enter a custom message'
    @current_newsletter =
      @current_user.newsletters.find_by(frequency: params[:frequency])

    if @current_user
      NewsletterMailer.send_current_newsletter(
        @current_user,
        @current_newsletter,
      ).deliver
    end
  end

  # # send User test email
  # def send_test_email
  #   @current_user = User.find_by(id: session[:user_id])

  #   UserTestMailer.send_test_email(@current_user).deliver if @current_user
  # end

  private

  def newsletter_params
    params.permit(:publish_date, :title, :sent, :frequency, :user_id)
  end

  def find_newsletter
    Newsletter.find_by!(id: params[:id])
  end

  def render_invalid_response(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
