class AddIndexToUserFnameLname < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :fname
    add_index :users, :lname
  end
end
