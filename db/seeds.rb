# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
require "open-uri"

FIRST_CATEGORIES = ["Bubble Tea", "Tea", "Ramen"]
SECOND_CATEGORIES = ["Coffee & Tea", "Cafes", "Noodles"]
THIRD_CATEGORIES = ["Boba Tea", "Japanese", "Taiwanese"]
CITIES = {
  "Napa": {"zip": [94558, 94559], "lat": [38.318563, 38.708006], "lng": [-122.387235, -122.235753]},
  "Vallejo": {"zip": [94591, 94590, 94589, 94592, 94534], "lat": [38.083718, 38.141423], "lng": [-122.243259, 122.202346]},
  "Fairfield": {"zip": [94533, 94534, 94535], "lat": [38.266687, 38.287645], "lng": [-122.075464, -121.990983]},
  "Concord": {"zip": [94521, 94520, 94518, 94519], "lat": [37.949961, 37.997306], "lng": [-122.045499, -121.973374]},
  "Richmond": {"zip": [94804, 94801, 94803, 94805], "lat": [37.927156, 37.948504], "lng": [-122.389762, -122.325615]},
  "Berkeley": {"zip": [94704, 94703, 94702, 94709, 94705, 94707, 94708, 94710], "lat": [37.854915, 37.881715], "lng": [-122.299450, -122.246603]},
  "Oakland": {"zip": [94601, 94605, 94606, 94603, 94621, 94602, 94611, 94610], "lat": [37.757217, 37.810131], "lng": [-122.214374, -122.182590]},
  "Hayward": {"zip": [94544, 94545, 94541, 94542], "lat": [37.623292, 37.662484], "lng": [-122.142229, -122.054117]},
  "Fremont": {"zip": [94536, 94538, 94539, 94555], "lat": [37.492764, 37.564389], "lng": [-121.984474, -121.927045]},
  "San Jose": {"zip": [95123, 95111, 95122, 95116, 95125, 95148, 95124, 95136, 95132], "lat": [37.235271, 37.351875], "lng": [-121.910085, -121.791788]},
  "Palo Alto": {"zip": [94306, 94303, 94301, 94304], "lat": [37.413378, 37.450884], "lng": [-122.148876, -122.109038]},
  "San Mateo": {"zip": [94403, 94401, 94402], "lat": [37.531628, 37.573630], "lng": [-122.318073, -122.293912]},
  "San Rafael": {"zip": [94901, 94903], "lat": [37.983210, 37.990754], "lng": [-122.528845, -122.467053]},
  "Novato": {"zip": [94947, 94945, 94949], "lat": [38.047993, 38.112274], "lng": [-122.577720, -122.543485]},
  "San Francisco": {"zip": [94112, 94110, 94109, 94122, 94116, 94121, 94134, 94117, 94118], "lat": [37.710281, 37.804892], "lng": [-122.479810, -122.396935]}
 }
PRICE_RANGE = ["$", "$$", "$$$"]
PARKING = ["Garage", "Street", "Private Lot"]

1000.times do
  temp_city = CITIES.keys[rand(0..14)]
  temp_zip = CITIES[temp_city][:zip][rand(0...CITIES[temp_city][:zip].length)]
  temp_lat = rand(CITIES[temp_city][:lat][0]..CITIES[temp_city][:lat][1])
  temp_lng = rand(CITIES[temp_city][:lng][0]..CITIES[temp_city][:lng][1])
  temp_fcat = FIRST_CATEGORIES[rand(0..2)]
  temp_scat = ""
  temp_tcat = ""

  if ([true, false].sample)
    temp_scat = SECOND_CATEGORIES[rand(0..2)]
    if ([true, false].sample)
      temp_tcat = THIRD_CATEGORIES[rand(0..2)]
    end   
  end    

  business = Business.create({
    biz_name: Faker::Restaurant.name,
    biz_address: Faker::Address.street_address,
    biz_city: temp_city,
    biz_state: 'CA',
    biz_zipcode: temp_zip,
    biz_lat: temp_lat,
    biz_lng: temp_lng,
    biz_phone: Faker::PhoneNumber.phone_number,
    biz_url: Faker::Internet.domain_name,
    biz_price_range: PRICE_RANGE[rand(0..2)],
    biz_first_cat: temp_fcat,
    biz_second_cat: temp_scat,
    biz_third_cat: temp_tcat,
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
end

User.create({username: "demoUser", email: "demo@demouser.com", fname: "Demo User", lname: "Demo", password: "password"});

10.times do
  user = User.create({
    username: Faker::Internet.username,
    email: Faker::Internet.free_email,
    password: "password",
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  })

  800.times do
    Review.create({
      review_body: Faker::Restaurant.review,
      review_rating: rand(1..5),
      user_id: user.id,
      business_id: rand(1..1000)
    })
  end
end

# (1..10).each do |x|
#   url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/#{x}.jpg"
#   file = open(url)
#   filename = "a_sack_of_potatoes_#{x}.jpg"
#   b1.pics.attach(io: file, filename: filename)
# end