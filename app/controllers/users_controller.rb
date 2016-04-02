class UsersController < ApplicationController

  def create
    respond_with User.create(user_params), location: nil
  end
  
  def show
    # respond_with User.find(params[:username, :password]), location: nil
  end
  
  def login
    @user = User.where(login_params).last
    respond_with @user.to_json, location: nil
  end
  
  def continue_game
    logger.info "test"
    logger.info continue_params
    game = Game.where(continue_params).last
    game_state = GameState.where({gameID: game[:id]}).last
    logger.info game.to_json
    logger.info game_state.to_json
    
    respond_with game_state.to_json, location: nil
    
    #respond_with user.to_json, location: nil
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :firstname, :lastname, :email)
  end
  
  def login_params
    params.require(:user).permit(:username, :password)
  end
  
  def continue_params
    params.require(:user).permit(:player_1_id)
  end

end
