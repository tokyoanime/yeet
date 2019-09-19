class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :review_body, null: false
      t.integer :review_rating, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :business_id
  end
end
