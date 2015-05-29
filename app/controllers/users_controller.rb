class UsersController < ApplicationController
  def index
  end

  def menu
  end

  def random
  end

  def words
    file='vendor/assets/texts/cat_and_mouse.txt'
    @words = File.readlines(file)
    @words_array = @words.sample.downcase
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    redirect_to "/menu"
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    redirect_to "/users/#{user.id}"
  end

  def destroy
    User.destroy(params[:id])
    redirect_to "/"
  end

  def profile
    authenticate!
    @user = current_user
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
