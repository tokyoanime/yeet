# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

b1 = Business.create({
  biz_name: 'A Sack of Potatoes',
  biz_address: '37100 Fremont Blvd, Ste C',
  biz_city: 'Fremont',
  biz_state: 'CA',
  biz_zipcode: 94536,
  biz_lat: 37.5603146,
  biz_lng: -122.0127191,
  biz_phone: '510-896-8070',
  biz_url: 'asackofpotatoes.com',
  biz_price_range: '',
  biz_first_cat: 'Pasta Shops',
  biz_second_cat: 'Cafes',
  biz_third_cat: 'Coffee & Tea',
  biz_mo_hrs: 'Closed',
  biz_tu_hrs: '11:00 am - 9:00 pm',
  biz_we_hrs: '11:00 am - 9:00 pm',
  biz_th_hrs: '11:00 am - 9:00 pm',
  biz_fr_hrs: '11:00 am - 10:00 pm',
  biz_sa_hrs: '11:00 am - 10:00 pm',
  biz_su_hrs: '11:00 am - 9:00 pm',
  biz_parking: 'Garage, Street',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b2 = Business.create({
  biz_name: 'Cocolo Ramen',
  biz_address: '39261 Cedar Blvd',
  biz_city: 'Newark',
  biz_state: 'CA',
  biz_zipcode: 94560,
  biz_lat: 37.522278,
  biz_lng: -122.006306,
  biz_phone: '510-790-9277',
  biz_url: '',
  biz_price_range: '',
  biz_first_cat: 'Ramen',
  biz_second_cat: '',
  biz_third_cat: '',
  biz_mo_hrs: 'Closed',
  biz_tu_hrs: '11:30 am - 9:00 pm',
  biz_we_hrs: '11:30 am - 9:00 pm',
  biz_th_hrs: '11:30 am - 9:00 pm',
  biz_fr_hrs: '11:30 am - 9:00 pm',
  biz_sa_hrs: '11:30 am - 9:00 pm',
  biz_su_hrs: '11:30 am - 9:00 pm',
  biz_parking: 'Private Lot',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b3 = Business.create({
  biz_name: 'Plucked Chicken & Beer',
  biz_address: '6762 Bernal Ave, Ste 630',
  biz_city: 'Pleasanton',
  biz_state: 'CA',
  biz_zipcode: 94566,
  biz_lat: 37.6570891,
  biz_lng: -121.899402,
  biz_phone: '925-425-0795',
  biz_url: 'pluckedchickenandbeer.com',
  biz_price_range: '$$',
  biz_first_cat: 'Chicken Shop',
  biz_second_cat: 'Chicken Wings',
  biz_third_cat: 'Sandwiches',
  biz_mo_hrs: '11:00 am - 9:00 pm',
  biz_tu_hrs: '11:00 am - 9:00 pm',
  biz_we_hrs: '11:00 am - 9:00 pm',
  biz_th_hrs: '11:00 am - 9:00 pm',
  biz_fr_hrs: '11:00 am - 9:00 pm',
  biz_sa_hrs: '11:00 am - 9:00 pm',
  biz_su_hrs: '11:00 am - 9:00 pm',
  biz_parking: 'Private Lot',
  biz_delivery: 'Yes',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

User.create({username: "demoUser", email: "demo@demouser.com", fname: "Demo User", lname: "Demo", password: "password"});

10.times do
  user = User.create({
    username: Faker::Internet.username,
    email: Faker::Internet.free_email,
    password: "password",
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  })

  Review.create({
    review_body: Faker::Food.description,
    review_rating: rand(1..5),
    user_id: user.id,
    business_id: b1.id
  })

  Review.create({
    review_body: Faker::Food.description,
    review_rating: rand(1..5),
    user_id: user.id,
    business_id: b2.id
  })

  Review.create({
    review_body: Faker::Food.description,
    review_rating: rand(1..5),
    user_id: user.id,
    business_id: b3.id
  })
end

(1..10).each do |x|
  url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/#{x}.jpg"
  file = open(url)
  filename = "a_sack_of_potatoes_#{x}.jpg"
  b1.pics.attach(io: file, filename: filename)

  url2 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/#{x}.jpg"
  file2 = open(url2)
  filename2 = "cocolo_ramen_#{x}.jpg"
  b2.pics.attach(io: file2, filename: filename2)

  url3 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/plucked_chicken_and_beer/#{x}.jpg"
  file3 = open(url3)
  filename3 = "plucked_chicken_and_beer_#{x}.jpg"
  b3.pics.attach(io: file3, filename: filename3)
end