json.extract! user, :id, :username, :email, :fname, :lname, :avatar
json.reviews user.reviews.map{ |el| el }