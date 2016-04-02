class GameStatesController < ApplicationController

  def create
    respond_with GameState.create(game_state_params), location: nil
  end

  def show
    respond_with GameState.find(params[:gameID]), location: nil
  end

  private
  def game_state_params
    params.require(:game_state).permit(
      :grillWorms,
      :deadGrillWorms,
      :activeDice,
      :frozenDice,
      :frozenDiceTotal,
      :gameStatus,
      :playerMessage,
      :playerWorms,
      :playerWormsTotals,
      :gameID,
    )
  end
  
end
