class Api::UsersController < Api::ApiController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @locations = @user.locations
    render :show
  end

end
