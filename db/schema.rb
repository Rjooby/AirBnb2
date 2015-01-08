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

ActiveRecord::Schema.define(version: 20150107164014) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "locations", force: true do |t|
    t.string   "name",          null: false
    t.string   "camptype",      null: false
    t.integer  "owner_id",      null: false
    t.integer  "price",         null: false
    t.text     "description",   null: false
    t.string   "coordinates",   null: false
    t.integer  "max_occupancy", null: false
    t.boolean  "water"
    t.boolean  "bathroom"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "locations", ["owner_id"], name: "index_locations_on_owner_id", using: :btree

  create_table "requests", force: true do |t|
    t.integer  "location_id",                      null: false
    t.integer  "requester_id",                     null: false
    t.integer  "guests_num",                       null: false
    t.string   "status",       default: "PENDING", null: false
    t.date     "start_date",                       null: false
    t.date     "end_date",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "requests", ["location_id"], name: "index_requests_on_location_id", using: :btree
  add_index "requests", ["requester_id"], name: "index_requests_on_requester_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
