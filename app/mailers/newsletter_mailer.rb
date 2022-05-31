class NewsletterMailer < ApplicationMailer
  default from: 'jsmndawn@gmail.com'

  # send a test Newsletter email
  def send_current_newsletter(user, current_newsletter)
    @user = user
    @current_newsletter = current_newsletter

    # @current_newsletter = current_newsletter

    mail(to: @user.email, subject: 'Newsletter Test')
  end
end
