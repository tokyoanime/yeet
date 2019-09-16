class AddColumnToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :biz_parking, :string
    add_column :businesses, :biz_delivery, :string
    add_column :businesses, :biz_takeout, :string
    add_column :businesses, :biz_reservations, :string
  end
end
