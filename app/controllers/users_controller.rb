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
    @user = User.where(login_params).last
    game = Game.where({player_1_id: user[:id]}).last
    game_state = GameState.where({gameID: game[:id]}).last
    logger.info user.to_json
    logger.info game.to_json
    logger.info game_state.to_json
    
    respond_with do |format|
      format.json {
        render :json => {
          :user => user,
          :game => game,
          :game_state => game_state
        }
      }
    end
    
    #respond_with user.to_json, location: nil
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :firstname, :lastname, :email)
  end
  
  def login_params
    params.require(:user).permit(:username, :password)
  end

end
