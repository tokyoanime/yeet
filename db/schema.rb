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

ActiveRecord::Schema.define(version: 2019_09_14_221900) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "businesses", force: :cascade do |t|
    t.string "biz_name", null: false
    t.string "biz_address", null: false
    t.string "biz_city", null: false
    t.string "biz_state", null: false
    t.integer "biz_zipcode", null: false
    t.float "biz_lat", null: false
    t.float "biz_lng", null: false
    t.string "biz_phone", null: false
    t.string "biz_url"
    t.string "biz_price_range"
    t.boolean "biz_parking", default: false, null: false
    t.boolean "biz_delivery", default: false, null: false
    t.boolean "biz_takeout", default: false, null: false
    t.boolean "biz_reservations", default: false, null: false
    t.string "biz_first_cat", null: false
    t.string "biz_second_cat"
    t.string "biz_third_cat"
    t.string "biz_mo_hrs"
    t.string "biz_tu_hrs"
    t.string "biz_we_hrs"
    t.string "biz_th_hrs"
    t.string "biz_fr_hrs"
    t.string "biz_sa_hrs"
    t.string "biz_su_hrs"
    t.integer "biz_owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["biz_city"], name: "index_businesses_on_biz_city"
    t.index ["biz_delivery"], name: "index_businesses_on_biz_delivery"
    t.index ["biz_first_cat"], name: "index_businesses_on_biz_first_cat"
    t.index ["biz_lat"], name: "index_businesses_on_biz_lat"
    t.index ["biz_lng"], name: "index_businesses_on_biz_lng"
    t.index ["biz_name", "biz_address", "biz_zipcode"], name: "index_businesses_on_biz_name_and_biz_address_and_biz_zipcode", unique: true
    t.index ["biz_parking"], name: "index_businesses_on_biz_parking"
    t.index ["biz_price_range"], name: "index_businesses_on_biz_price_range"
    t.index ["biz_reservations"], name: "index_businesses_on_biz_reservations"
    t.index ["biz_takeout"], name: "index_businesses_on_biz_takeout"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
