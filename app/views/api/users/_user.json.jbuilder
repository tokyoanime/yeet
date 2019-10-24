json.extract! user, :id, :username, :email, :fname, :lname
json.reviews user.reviews.reverse().map{ |el| el }