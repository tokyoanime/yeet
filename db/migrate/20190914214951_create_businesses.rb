class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :biz_name, null: false
      t.string :biz_address, null: false
      t.string :biz_city, null: false
      t.string :biz_state, null: false
      t.integer :biz_zipcode, null: false
      t.float :biz_lat, null: false
      t.float :biz_lng, null: false
      t.string :biz_phone, null: false
      t.string :biz_url
      t.string :biz_price_range
      t.boolean :biz_parking, null: false, :default => false;
      t.boolean :biz_delivery, null: false, :default => false;
      t.boolean :biz_takeout, null: false, :default => false;
      t.boolean :biz_reservations, null: false, :default => false;
      t.string :biz_first_cat, null: false
      t.string :biz_second_cat
      t.string :biz_third_cat
      t.string :biz_mo_hrs
      t.string :biz_tu_hrs
      t.string :biz_we_hrs
      t.string :biz_th_hrs
      t.string :biz_fr_hrs
      t.string :biz_sa_hrs
      t.string :biz_su_hrs
      t.integer :biz_owner_id
      t.timestamps
    end

    add_index :businesses, [:biz_name, :biz_address, :biz_zipcode], unique: true
    add_index :businesses, :biz_city
    # add_index :businesses, :biz_price_range, :biz_parking, :biz_delivery, :biz_takeout, :biz_reservations, :biz_first_cat
  end
end
