json.extract! user, :id, :username, :email, :fname, :lname
# json.reviews user.reviews.reverse().map{ |el| el }

json.reviews user.reviews.each do |review|
  json.extract! review, :id, :review_body, :review_rating, :business_id, :user_id, :created_at
  json.biz_name review.business.biz_name
end