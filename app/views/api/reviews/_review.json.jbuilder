json.extract! review, :id, :review_body, :review_rating, :business_id, :user_id, :created_at
json.user_name review.user.username
json.biz_name review.business.biz_name
