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

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end

  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :avatar, :first_name, :last_name, :password)
  end


end
