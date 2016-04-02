class GamesController < ApplicationController

  def create
    respond_with Game.create(game_params), location: nil   
  end

  def show
    respond_with Game.find(params[:player_1_id]), location: nil
  end

  private
  def game_params
    params.require(:game).permit(:player_1_id)
  end
end
