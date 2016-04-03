# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160401005218) do

  create_table "game_states", force: :cascade do |t|
    t.string   "grillWorms"
    t.string   "deadGrillWorms"
    t.string   "activeDice"
    t.string   "frozenDice"
    t.string   "frozenDiceTotal"
    t.string   "gameStatus"
    t.string   "playerMessage"
    t.string   "playerWorms"
    t.string   "playerWormsTotals"
    t.integer  "gameID"
    t.datetime "created_at",        null: false
    t.integer  "game_id"
    t.datetime "updated_at",        null: false
  end

  add_index "game_states", ["game_id"], name: "index_game_states_on_game_id"

  create_table "games", force: :cascade do |t|
    t.integer  "player_1_id"
    t.integer  "player_2_id"
    t.datetime "created_at",  null: false
    t.integer  "user_id"
    t.datetime "updated_at",  null: false
  end

  add_index "games", ["user_id"], name: "index_games_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
