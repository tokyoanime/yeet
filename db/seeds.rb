# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

# User.destroy_all
# Business.destroy_all
# Review.destroy_all

b1 = Business.create({
  biz_name: 'A Sack of Potatoes',
  biz_address: '37100 Fremont Blvd, Ste C',
  biz_city: 'Fremont',
  biz_state: 'CA',
  biz_zipcode: 94536,
  biz_lat: 37.5603146,
  biz_lng: -122.0127191,
  biz_phone: '510-896-8070',
  biz_url: 'asackofpotatoes.com/',
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
end

url1 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/1.jpg"
file1 = open("https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/1.jpg")
filename1 = "a_sack_of_potatoes_1.jpg"
b1.pics.attach(io: file1, filename: filename1)

url2 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/2.jpg"
file2 = open("https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/2.jpg")
filename2 = "a_sack_of_potatoes_2.jpg"
b1.pics.attach(io: file2, filename: filename2)

url3 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/3.jpg"
file3 = open(url3)
filename3 = "a_sack_of_potatoes_3.jpg"
b1.pics.attach(io: file3, filename: filename3)

url4 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/4.jpg"
file4 = open(url4)
filename4 = "a_sack_of_potatoes_4.jpg"
b1.pics.attach(io: file4, filename: filename4)

url5 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/5.jpg"
file5 = open(url5)
filename5 = "a_sack_of_potatoes_5.jpg"
b1.pics.attach(io: file5, filename: filename5)

url6 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/6.jpg"
file6 = open(url6)
filename6 = "a_sack_of_potatoes_6.jpg"
b1.pics.attach(io: file6, filename: filename6)

url7 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/7.jpg"
file7 = open(url7)
filename7 = "a_sack_of_potatoes_7.jpg"
b1.pics.attach(io: file7, filename: filename7)

url8 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/8.jpg"
file8 = open(url8)
filename8 = "a_sack_of_potatoes_8.jpg"
b1.pics.attach(io: file8, filename: filename8)

url9 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/9.jpg"
file9 = open(url9)
filename9 = "a_sack_of_potatoes_9.jpg"
b1.pics.attach(io: file9, filename: filename9)

url10 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/10.jpg"
file10 = open(url10)
filename10 = "a_sack_of_potatoes_10.jpg"
b1.pics.attach(io: file10, filename: filename10)

urlp1 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/1.jpg"
filep1 = open(urlp1)
filenamep1 = "a_sack_of_potatoes_1.jpg"
b2.pics.attach(io: filep1, filename: filenamep1)

urlp2 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/2.jpg"
filep2 = open(urlp2)
filenamep2 = "a_sack_of_potatoes_2.jpg"
b2.pics.attach(io: filep2, filename: filenamep2)

urlp3 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/3.jpg"
filep3 = open(urlp3)
filenamep3 = "a_sack_of_potatoes_3.jpg"
b2.pics.attach(io: filep3, filename: filenamep3)

urlp4 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/4.jpg"
filep4 = open(urlp4)
filenamep4 = "a_sack_of_potatoes_4.jpg"
b2.pics.attach(io: filep4, filename: filenamep4)

urlp5 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/5.jpg"
filep5 = open(urlp5)
filenamep5 = "a_sack_of_potatoes_5.jpg"
b2.pics.attach(io: filep5, filename: filenamep5)

urlp6 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/6.jpg"
filep6 = open(urlp6)
filenamep6 = "a_sack_of_potatoes_6.jpg"
b2.pics.attach(io: filep6, filename: filenamep6)

urlp7 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/7.jpg"
filep7 = open(urlp7)
filenamep7 = "a_sack_of_potatoes_7.jpg"
b2.pics.attach(io: filep7, filename: filenamep7)

urlp8 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/8.jpg"
filep8 = open(urlp8)
filenamep8 = "a_sack_of_potatoes_8.jpg"
b2.pics.attach(io: filep8, filename: filenamep8)

urlp9 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/9.jpg"
filep9 = open(urlp9)
filenamep9 = "a_sack_of_potatoes_9.jpg"
b2.pics.attach(io: filep9, filename: filenamep9)

urlp10 = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/10.jpg"
filep10 = open(urlp10)
filenamep10 = "a_sack_of_potatoes_10.jpg"
b2.pics.attach(io: filep10, filename: filenamep10)

# 10.times do |z|
#   url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/a_sack_of_potatoes/#{z}.jpg"
#   file = open(url)
#   filename = "a_sack_of_potatoes_#{z}.jpg"
#   b1.pics.attach(io: file, filename: filename)
# end

# 10.times do |i|
#   url = "https://as-yeet-seeds.s3-us-west-1.amazonaws.com/cocolo_ramen/#{i}.jpg"
#   file = open(url)
#   filename = "cocolo_ramen_#{i}.jpg"
#   b1.pics.attach(io: file, filename: filename)
# end