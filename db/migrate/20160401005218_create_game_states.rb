class CreateGameStates < ActiveRecord::Migration
  def change
    create_table :game_states do |t|
      t.string :grillWorms
      t.string :deadGrillWorms
      t.string :activeDice
      t.string :frozenDice
      t.string :frozenDiceTotal
      t.string :gameStatus
      t.string :playerMessage
      t.string :playerMessage
      t.string :playerWorms
      t.string :playerWormsTotals
      t.integer :gameID
      t.integer :created_at
      t.references :game, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
