# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_28_071625) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ans_votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.bigint "answer_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_ans_votes_on_answer_id"
    t.index ["post_id"], name: "index_ans_votes_on_post_id"
    t.index ["user_id"], name: "index_ans_votes_on_user_id"
  end

  create_table "answers", force: :cascade do |t|
    t.text "desc"
    t.bigint "post_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_answers_on_post_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "post_votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_votes_on_post_id"
    t.index ["user_id"], name: "index_post_votes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.text "outcome"
    t.bigint "user_id", null: false
    t.string "tags"
    t.integer "views", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "role", default: "user"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "ans_votes", "answers"
  add_foreign_key "ans_votes", "posts"
  add_foreign_key "ans_votes", "users"
  add_foreign_key "answers", "posts"
  add_foreign_key "answers", "users"
  add_foreign_key "post_votes", "posts"
  add_foreign_key "post_votes", "users"
  add_foreign_key "posts", "users"
end
