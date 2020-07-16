# == Schema Information
#
# Table name: businesses
#
#  id               :bigint           not null, primary key
#  biz_name         :string           not null
#  biz_address      :string           not null
#  biz_city         :string           not null
#  biz_state        :string           not null
#  biz_zipcode      :integer          not null
#  biz_lat          :float            not null
#  biz_lng          :float            not null
#  biz_phone        :string           not null
#  biz_url          :string
#  biz_price_range  :string
#  biz_first_cat    :string           not null
#  biz_second_cat   :string
#  biz_third_cat    :string
#  biz_mo_hrs       :string
#  biz_tu_hrs       :string
#  biz_we_hrs       :string
#  biz_th_hrs       :string
#  biz_fr_hrs       :string
#  biz_sa_hrs       :string
#  biz_su_hrs       :string
#  biz_owner_id     :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  biz_parking      :string
#  biz_delivery     :string
#  biz_takeout      :string
#  biz_reservations :string
#

class Business < ApplicationRecord
  validates :biz_name, :biz_address, :biz_city, :biz_state, :biz_zipcode, :biz_lat, :biz_lng, presence: true
  validates :biz_phone, :biz_first_cat, presence: true
  validates :biz_name, uniqueness: { scope: [:biz_address, :biz_zipcode], message: 'Business already exists at this address' }

  has_many_attached :pics
  has_many :reviews
  has_many :favorites

  def self.text_search(query)
    keyword = query["keyword"]
    near = query["near"]
    filter = query["filter"]
    
    if near.empty?
      near = "San Francisco"
    end

    if keyword.empty?
      return where('biz_city @@ :n', n: near)
    else
      return where('biz_name @@ :k or biz_first_cat @@ :k or biz_second_cat @@ :k or biz_third_cat @@ :k', k: keyword).where('biz_city @@ :n', n: near);
    end
  end
end
