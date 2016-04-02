class UsersController < ApplicationController

  def create
    respond_with User.create(user_params), location: nil
  end
  
  def show
    # respond_with User.find(params[:username, :password]), location: nil
  end
  
  def login
    respond_with User.where(login_params).last, location: nil
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :firstname, :lastname, :email)
  end
  
  def login_params
    params.require(:user).permit(:username, :password)
  end

end
