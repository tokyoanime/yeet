class AddIndexToColumnsToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_index :businesses, :biz_lat
    add_index :businesses, :biz_lng
    add_index :businesses, :biz_price_range
    add_index :businesses, :biz_parking
    add_index :businesses, :biz_delivery
    add_index :businesses, :biz_takeout
    add_index :businesses, :biz_reservations
    add_index :businesses, :biz_first_cat
  end
end

