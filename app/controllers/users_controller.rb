class UsersController < ApplicationController

  def create
    respond_with User.create(user_params)
  end
  
  def show
    respond_with User.find(params[:username, :password])
  end
  
  private
  def user_params
    params.require(:user).permit(
      :username, 
      :password, 
      :firstname, 
      :lastname, 
      :email
      )
  end

end
