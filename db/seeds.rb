# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
require "open-uri"

BOBA = {
  0 => ["Boba Guys", "429 Stockton St", "San Francisco", 94108, 37.7840691, -122.413177],
  1 => ["i-Tea Kearny", "253 Kearny St", "San Francisco", 94108, 37.7840691, -122.413177],
  2 => ["Gong Cha", "272 O'Farrell St", "San Francisco", 94102, 37.7840691, -122.413177],
  3 => ["Teaspoon San Francisco", "2125 Polk St", "San Francisco", 94109, 37.7863426, -122.4209441],
  4 => ["Boba Guys Mission", "3491 19th St", "San Francisco", 94110, 37.7703231, -122.4458761],
  5 => ["Mr. Green Bubble", "4299 Piedmont Ave", "Oakland", 94611, 37.8031062, -122.286484],
  6 => ["YOKEE", "1728 Franklin St", "Oakland", 94612, 37.8031062, -122.286484],
  7 => ["Quickly", "1243 33rd Avenue", "Oakland", 94601, 37.7992252, -122.2747308],
  8 => ["Golden Tea Shop", "901 Franklin St #128", "Oakland", 94607, 37.7999606, -122.2733487],
  9 => ["Sweetheart Cafe & Tea", "315 9th St", "Oakland", 94607, 37.7999606, -122.2733487],
  10 => ["Jazen Tea", "1834 Tully Rd", "San Jose", 95122, 37.3218201, -121.9185504],
  11 => ["Tea Alley", "40 S 1st St", "San Jose", 95113, 37.3218201, -121.9185504],
  12 => ["The Tea Zone Lounge", "403 N Capitol Ave", "San Jose", 95133, 37.3244983, -121.8802087],
  13 => ["Simply Boba", "3005 Silver Creek Rd #192", "San Jose", 95121, 37.3244983, -121.8802087],
  14 => ["Boba Pub", "1576 Branham Ln", "San Jose", 95118, 37.2859641, -121.9224363]
}

RAMEN = {
  0 => ["Kirimachi Ramen", "3 Embarcadero Center", "San Francisco", 94111, 37.780098, -122.4286692],
  1 => ["Nojo Ramen Tavern", "231 Franklin St", "San Francisco", 94102, 37.780098, -122.4286692],
  2 => ["Coco's Ramen", "3319 Mission St", "San Francisco", 94110, 37.7466227, -122.447008],
  3 => ["Ramen Yamadaya", "1728 Buchanan St Floor 2", "San Francisco", 94115, 37.7663292, -122.4378534],
  4 => ["Ajisen Ramen", "865 Market Street Unit# C012", "San Francisco", 94103, 37.7731108, -122.4268344],
  5 => ["Soba Ichi", "2311A Magnolia St", "Oakland", 94607, 37.8164654, -122.2757399],
  6 => ["Aburaya", "362 17th St", "Oakland", 94607, 37.8164654, -122.2757399],
  7 => ["Shogun Japanese Sushi & Grill", "3417 Grand Ave", "Oakland", 94610, 37.8164654, -122.2757399],
  8 => ["Marufuku Ramen", "4828 Telegraph Ave", "Oakland", 94609, 37.8144577, -122.2690933],
  9 => ["Shinmai", "1825-3 San Pablo Ave", "Oakland", 94612, 37.8107512, -122.2797473],
  10 => ["Obu Ramen House", "1098 E Brokaw Rd #10", "San Jose", 95131, 37.4256161, -122.0495125],
  11 => ["Kumako Ramen", "211 Jackson St", "San Jose", 95112, 37.3943379, -121.9956269],
  12 => ["JINYA Ramen Bar", "925 Blossom Hill Rd #1637", "San Jose", 95123, 37.3702108, -121.9438548],
  13 => ["Ramen Osaka", "4035 Evergreen Village Square #40", "San Jose", 95135, 37.3512484, -121.9052624],
  14 => ["IZAKA-YA", "1335 N 1st St", "San Jose", 95112, 37.3333971, -121.9568359]
}

PRICE_RANGE = ["$", "$$", "$$$"];
PARKING = ["Garage", "Street", "Private Lot"];

(0..14).each do |x|
  business = Business.create({
    biz_name: BOBA[x][0],
    biz_address: BOBA[x][1],
    biz_city: BOBA[x][2],
    biz_state: 'CA',
    biz_zipcode: BOBA[x][3],
    biz_lat: BOBA[x][4],
    biz_lng: BOBA[x][5],
    biz_phone: Faker::PhoneNumber.phone_number,
    biz_url: Faker::Internet.domain_name,
    biz_price_range: PRICE_RANGE[rand(0..2)],
    biz_first_cat: "Bubble Tea",
    biz_second_cat: "Boba Tea",
    biz_third_cat: "Coffee & Tea",
    biz_mo_hrs: "11:00 am - 9:00 pm",
    biz_tu_hrs: "11:00 am - 9:00 pm",
    biz_we_hrs: "11:00 am - 9:00 pm",
    biz_th_hrs: "11:00 am - 9:00 pm",
    biz_fr_hrs: "11:00 am - 10:00 pm",
    biz_sa_hrs: "11:00 am - 10:00 pm",
    biz_su_hrs: "11:00 am - 9:00 pm",
    biz_parking: PARKING[rand(0..2)],
    biz_delivery: ["Yes", "No"].sample,
    biz_takeout: ["Yes", "No"].sample,
    biz_reservations: ["Yes", "No"].sample
  })

  
  (1..7).each do |y|
    temp_pic = [1,2,3,4,5,6,7,8,9,10,11,12,13,14].shuffle
    url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/boba/#{temp_pic[y]}.jpg"
    file = open(url)
    filename = "boba_#{business.id}_#{y}.jpg"
    business.pics.attach(io: file, filename: filename)
  end
end

(0..14).each do |x|
  business = Business.create({
    biz_name: RAMEN[x][0],
    biz_address: RAMEN[x][1],
    biz_city: RAMEN[x][2],
    biz_state: 'CA',
    biz_zipcode: RAMEN[x][3],
    biz_lat: RAMEN[x][4],
    biz_lng: RAMEN[x][5],
    biz_phone: Faker::PhoneNumber.phone_number,
    biz_url: Faker::Internet.domain_name,
    biz_price_range: PRICE_RANGE[rand(0..2)],
    biz_first_cat: "Ramen",
    biz_second_cat: "Noodles",
    biz_third_cat: "Japanese",
    biz_mo_hrs: "11:00 am - 9:00 pm",
    biz_tu_hrs: "11:00 am - 9:00 pm",
    biz_we_hrs: "11:00 am - 9:00 pm",
    biz_th_hrs: "11:00 am - 9:00 pm",
    biz_fr_hrs: "11:00 am - 10:00 pm",
    biz_sa_hrs: "11:00 am - 10:00 pm",
    biz_su_hrs: "11:00 am - 9:00 pm",
    biz_parking: PARKING[rand(0..2)],
    biz_delivery: ["Yes", "No"].sample,
    biz_takeout: ["Yes", "No"].sample,
    biz_reservations: ["Yes", "No"].sample
  })

  (1..7).each do |y|
    temp_pic = [1,2,3,4,5,6,7,8,9,10,11,12,13,14].shuffle
    url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/ramen/#{temp_pic[y]}.jpg"
    file = open(url)
    filename = "ramen_#{business.id}_#{y}.jpg"
    business.pics.attach(io: file, filename: filename)
  end
end



User.create({username: "demoUser", email: "demo@demouser.com", fname: "Demo User", lname: "Demo", password: "password"});

20.times do
  user = User.create({
    username: Faker::Internet.username,
    email: Faker::Internet.free_email,
    password: "password",
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  })

  30.times do
    Review.create({
      review_body: Faker::Restaurant.review,
      review_rating: rand(1..5),
      user_id: user.id,
      business_id: rand(1..30)
    })
  end
end

# (1..10).each do |x|
#   url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/#{x}.jpg"
#   file = open(url)
#   filename = "a_sack_of_potatoes_#{x}.jpg"
#   b1.pics.attach(io: file, filename: filename)
# end