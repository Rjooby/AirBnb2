class UsersController < ApplicationController
  before_action :require_not_signed_in!, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to locations_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = current_user
    @locations = current_user.locations
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end
