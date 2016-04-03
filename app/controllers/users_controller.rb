class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    logger.info 'test'
    logger.info @user.to_json
    logger.info 'test'
    if @user.save
      session[:user_id]=@user[:id]
      session[:firstname]=@user[:firstname]
      respond_with @user, location: nil
    else
      respond_with nil, location: nil
    end
  end
  
  def show
    # respond_with User.find(params[:username, :password]), location: nil
  end
  
  def login
    @user = User.where({username: login_params[:username]}).last.try(:authenticate, login_params[:password_digest])
    if @user
      session[:user_id]=@user[:id]
      session[:firstname]=@user[:firstname]
      respond_with @user.to_json, location: nil
    else
      respond_with nil, location: nil
    end
  end
  
  def logout
    reset_session
    respond_with nil, location:nil
  end
  
  def continue_game
    game = Game.where(continue_params).last

    if !game.nil?
      game_state = GameState.where({gameID: game[:id]}).last
    
      respond_with game_state.to_json, location: nil
    else
      respond_with nil, location: nil
    end
  end
  
  private  
  def user_params
    params.require(:user).permit(:username, :password_digest, :firstname, :lastname, :email)
  end
  
  def login_params
    params.require(:user).permit(:username, :password_digest)
  end
  
  def continue_params
    params.require(:user).permit(:player_1_id)
  end

end
