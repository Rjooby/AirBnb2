class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  wrap_parameters false
  helper_method :current_user, :signed_in?, :current_location

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_token
  end

  def sign_out
    current_user.reset_token
    session[:session_token] = nil
  end

  def require_signed_in!
    unless signed_in?
      redirect_to locations_url
      flash[:errors] = ["You must be signed in"]
    end
  end

  def require_not_signed_in!
    redirect_to locations_url if signed_in?
  end

  def current_location
    {
      latitude: request.location.data["latitude"],
      longitude: request.location.data["longitude"]
    }
  end

end
