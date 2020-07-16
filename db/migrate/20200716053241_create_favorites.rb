class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.boolean :fav, default: false
      t.timestamps
    end
    add_index :favorites, [:user_id, :business_id], unique: true
  end
end
