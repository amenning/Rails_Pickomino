class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :player_1_id
      t.integer :player_2_id
      t.integer :created_at
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
