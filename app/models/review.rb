# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  review_body   :text             not null
#  review_rating :integer          not null
#  user_id       :integer          not null
#  business_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :review_body, :review_rating, :user_id, :business_id, presence: true

  belongs_to :user
  belongs_to :business
end
