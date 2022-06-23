class ApplicationController < ActionController::Base
  include ActionController::Cookies

  skip_before_action :verify_authenticity_token

  # serve client’s index.html for any path that is not included in your client’s routes:
  def fallback_index_html
    render file: 'public/index.html'
  end

  #   protect_from_forgery
  #   before_filter :current_user, :cors_preflight_check
  #   after_filter :cors_set_access_control_headers

  #   # For all responses in this controller, return the CORS access control headers.

  #   def cors_set_access_control_headers
  #     headers['Access-Control-Allow-Origin'] = '*'
  #     headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
  #     headers['Access-Control-Allow-Headers'] = '*'
  #     headers['Access-Control-Max-Age'] = '1728000'
  #   end

  #   # If this is a preflight OPTIONS request, then short-circuit the
  #   # request, return only the necessary headers and return an empty
  #   # text/plain.

  #   def cors_preflight_check
  #     if request.method == :options
  #       headers['Access-Control-Allow-Origin'] = '*'
  #       headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
  #       headers['Access-Control-Allow-Headers'] = '*'
  #       headers['Access-Control-Max-Age'] = '1728000'
  #       render text: '', content_type: 'text/plain'
  #     end
  #   end
  #   private

  #   # get the user currently logged in
  #   def current_user
  #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
  #   end
  #   helper_method :current_user

  # before_action :set_current_user

  #   def set_current_user
  #     # finds user with session data and stores it if present
  #     Current.user = User.find_by(id: session[:user_id]) if session[:user_id]
  #   end

  #   def require_user_logged_in!
  #     # allows only logged in user
  #     redirect_to sign_in_path, alert: 'You must be signed in' if Current.user.nil?
  #   end
end
