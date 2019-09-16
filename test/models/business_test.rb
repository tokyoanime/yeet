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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
