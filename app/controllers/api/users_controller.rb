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

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :avatar)
  end


end
