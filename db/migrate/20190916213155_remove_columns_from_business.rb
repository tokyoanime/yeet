class RemoveColumnsFromBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :biz_parking
    remove_column :businesses, :biz_delivery
    remove_column :businesses, :biz_takeout
    remove_column :businesses, :biz_reservations
  end
end
