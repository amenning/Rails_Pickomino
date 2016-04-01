class GamesController < ApplicationController

  def create
    respond_with Game.create(game_params)
  end

  def show
    respond_with Game.find(params[:player_1_id])
  end

  private
  def game_params
    params.require(:game).permit(
      :player_1_id, 
      :player_2_id, 
      :created_at
      )
  end
end
