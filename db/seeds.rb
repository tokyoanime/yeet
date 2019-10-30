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
  biz_price_range: '$',
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
  biz_name: 'Meet Fresh',
  biz_address: '43337 Boscell Rd, P9-C',
  biz_city: 'Fremont',
  biz_state: 'CA',
  biz_zipcode: 94538,
  biz_lat: 37.5032152,
  biz_lng: -121.9784397,
  biz_phone: '510-573-0785',
  biz_url: 'meetfresh.us',
  biz_price_range: '$',
  biz_first_cat: 'Desserts',
  biz_second_cat: 'Bubble Tea',
  biz_third_cat: 'Shaved Ice',
  biz_mo_hrs: '11:00 am - 11:00 pm',
  biz_tu_hrs: '11:00 am - 11:00 pm',
  biz_we_hrs: '11:00 am - 11:00 pm',
  biz_th_hrs: '11:00 am - 11:00 pm',
  biz_fr_hrs: '11:00 am - 12:00 am',
  biz_sa_hrs: '11:00 am - 12:00 am',
  biz_su_hrs: '11:00 am - 11:00 pm',
  biz_parking: 'Private Lot',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b3 = Business.create({
  biz_name: 'Yokohama Iekei Ramen',
  biz_address: '39206 Fremont Blvd',
  biz_city: 'Fremont',
  biz_state: 'CA',
  biz_zipcode: 94538,
  biz_lat: 37.547697,
  biz_lng: -121.9867686,
  biz_phone: '510-298-9698',
  biz_url: 'yokohamaiekei.com',
  biz_price_range: '$$',
  biz_first_cat: 'Ramen',
  biz_second_cat: 'Noodles',
  biz_third_cat: '',
  biz_mo_hrs: '11:00 am - 9:00 pm',
  biz_tu_hrs: '11:00 am - 9:00 pm',
  biz_we_hrs: '11:00 am - 9:00 pm',
  biz_th_hrs: '11:00 am - 9:00 pm',
  biz_fr_hrs: '11:00 am - 9:00 pm',
  biz_sa_hrs: '11:00 am - 9:00 pm',
  biz_su_hrs: '11:00 am - 9:00 pm',
  biz_parking: 'Private Lot',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b4 = Business.create({
  biz_name: 'Shumi Ramen House',
  biz_address: '43691 Mission Blvd',
  biz_city: 'Fremont',
  biz_state: 'CA',
  biz_zipcode: 94539,
  biz_lat: 37.5262985,
  biz_lng: -121.9204669,
  biz_phone: '510-413-6050',
  biz_url: '',
  biz_price_range: '',
  biz_first_cat: 'Ramen',
  biz_second_cat: '',
  biz_third_cat: '',
  biz_mo_hrs: '5:00 pm - 9:00 pm',
  biz_tu_hrs: '5:00 pm - 9:00 pm',
  biz_we_hrs: '5:00 pm - 9:00 pm',
  biz_th_hrs: '5:00 pm - 9:00 pm',
  biz_fr_hrs: '5:00 pm - 9:00 pm',
  biz_sa_hrs: '5:00 pm - 9:00 pm',
  biz_su_hrs: '5:00 pm - 9:00 pm',
  biz_parking: 'Street',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b4 = Business.create({
  biz_name: 'Porco Ramen',
  biz_address: '1710 Berryessa Rd, Ste 107',
  biz_city: 'San Jose',
  biz_state: 'CA',
  biz_zipcode: 95133,
  biz_lat: 37.3726606,
  biz_lng: -121.8753154,
  biz_phone: '669-284-3926',
  biz_url: '',
  biz_price_range: '$$',
  biz_first_cat: 'Ramen',
  biz_second_cat: '',
  biz_third_cat: '',
  biz_mo_hrs: '11:30 am - 8:30 pm',
  biz_tu_hrs: '11:30 am - 8:30 pm',
  biz_we_hrs: '11:30 am - 8:30 pm',
  biz_th_hrs: '11:30 am - 8:30 pm',
  biz_fr_hrs: '11:30 am - 8:30 pm',
  biz_sa_hrs: '11:30 am - 8:30 pm',
  biz_su_hrs: '11:30 am - 8:30 pm',
  biz_parking: 'Private Lot',
  biz_delivery: 'No',
  biz_takeout: 'Yes',
  biz_reservations: 'No'
})

b5 = Business.create({
  biz_name: 'Seiki House',
  biz_address: '4035 Evergreen Village Sq, Ste 40',
  biz_city: 'San Jose',
  biz_state: 'CA',
  biz_zipcode: 95135,
  biz_lat: 37.4028525,
  biz_lng: -121.9212347,
  biz_phone: '408-495-1000',
  biz_url: 'seikiramen.com',
  biz_price_range: '$$',
  biz_first_cat: 'Ramen',
  biz_second_cat: '',
  biz_third_cat: '',
  biz_mo_hrs: '12:00 pm - 12:00 am',
  biz_tu_hrs: '12:00 pm - 12:00 am',
  biz_we_hrs: '12:00 pm - 12:00 am',
  biz_th_hrs: '12:00 pm - 12:00 am',
  biz_fr_hrs: '12:00 pm - 12:00 am',
  biz_sa_hrs: '12:00 pm - 12:00 am',
  biz_su_hrs: '12:00 pm - 12:00 am',
  biz_parking: 'Private Lot, Street',
  biz_delivery: 'Yes',
  biz_takeout: 'Yes',
  biz_reservations: 'Yes'
})

b6 = Business.create({
  biz_name: 'Shincha Tea',
  biz_address: '2487 Alvin Ave',
  biz_city: 'San Jose',
  biz_state: 'CA',
  biz_zipcode: 95121,
  biz_lat: 37.3191077,
  biz_lng: -121.8291356,
  biz_phone: '408-531-9385',
  biz_url: 'shinchatea.com',
  biz_price_range: '$',
  biz_first_cat: 'Coffee & Tea',
  biz_second_cat: 'Bubble Tea',
  biz_third_cat: 'Cafes',
  biz_mo_hrs: '11:00 am - 9:00 pm',
  biz_tu_hrs: '11:00 am - 9:00 pm',
  biz_we_hrs: '11:00 am - 9:00 pm',
  biz_th_hrs: '11:00 am - 9:00 pm',
  biz_fr_hrs: '11:00 am - 12:00 am',
  biz_sa_hrs: '11:00 am - 12:00 am',
  biz_su_hrs: '11:00 am - 12:00 am',
  biz_parking: 'Private Lot',
  biz_delivery: 'No',
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
end