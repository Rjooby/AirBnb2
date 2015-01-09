class SessionsController < ApplicationController
    before_action :require_not_signed_in!, only: [:new, :create]

  def new

  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      sign_in(user)
      redirect_to ""
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to ""
  end
end
