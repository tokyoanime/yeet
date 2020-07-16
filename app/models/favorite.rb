class Favorite < ApplicationRecord
  default_scope { order(created_at: :desc) }

  validates :fav, inclusion: { in: [true, false]}
  
  belongs_to :user
  belongs_to :business
end
