class AddFnameLnameToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fname, :string, null: false, index: true
    add_column :users, :lname, :string, null: false, index: true
    # add_index :users, :fname, :lname
  end
end
