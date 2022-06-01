class NewsletterMailer < ApplicationMailer
  default from: 'jsmndawn@gmail.com'

  # send a test Newsletter email
  def send_current_newsletter(user, current_newsletter)
    @user = user
    @current_newsletter = current_newsletter

    if current_newsletter.frequency == 'weekly'
      @frequency = 'week'
    else
      @frequency = 'month'
    end

    mail(
      to: @user.email,
      subject: "Your #{current_newsletter.frequency.capitalize} Newsletter",
    )
  end
end
