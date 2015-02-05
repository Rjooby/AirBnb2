# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


  User.create!(username: "Ron", password: "ronron", avatar_url: "http://img3.wikia.nocookie.net/__cb20140410195936/pokemon/images/archive/e/e1/20150101093317!025Pikachu_OS_anime_4.png")
  User.create!(username: "dood", password: "doodle")
  User.create!(username: "algore", password: "president")
  User.create!(username: "Janky", password: "yoyoyo")

  Location.create!(
    name: "Central Park Tunnel",
    camptype: "drive",
    owner_id: 1,
    price: 20,
    description: "Sleep in Central Park where security won't notice! The tunnels of Central Park offer plenty of sleeping space where you'll get comfortable with both nature and NYC taxis",
    coordinates: "36-68 79th Street Transverse, New York, NY 10024",
    max_occupancy: 1,
    water: false,
    bathroom: false,
    photo_url: "https://www.coolcamping.co.uk/system/images/369/great-langdale-national-trust-campsite-large.jpg"
    )

  Location.create!(
    name: "Museum of Natural History",
    camptype: "drive",
    owner_id: 2,
    price: 60,
    description: "Relive Ben Stiller's movie and stay the night with History! We can't promise skeletons that will come alive nor Robin Williams :( but we promise it will be a night you won't forget.",
    coordinates: "81 St - Museum of Natural History",
    max_occupancy: 30,
    water: true,
    bathroom: true,
    photo_url: "http://www.coolplaces.co.uk/system/images/11058/the-secret-campsite-sleep-campsites-large.jpg")

  Location.create!(
    name: "Jersey Slums",
    camptype: "wild",
    owner_id: 3,
    price: -10,
    description: "I will pay you to sleep here. Recently a group of hobos have been camping out near my place and has been disrupting the entire neighborhood. Please take their spot first and prevent them staying here.",
    coordinates: "334 Harrison Ave Harrison, NJ 07029",
    max_occupancy: 10,
    water: false,
    bathroom: false,
    photo_url: "http://campsitedirect.com/wp-content/uploads/2014/12/campsite-direct.jpg"
  )



  Location.create!(
    name: "Great access to New York City",
    camptype: "drive",
    owner_id: 4,
    price: 35,
    description: "This is my buddy Frank's place. You don't even have to let him know. Feel free to set up camp in the backyard and stay as long as you want. Come inside and help yourself to the fridge and anything else you need.",
    coordinates: "150 Romaine Ave, Jersey City, NJ 07306",
    max_occupancy: 1000,
    water: true,
    bathroom: true,
    photo_url: "https://www.coolcamping.co.uk/system/images/3485/the-secret-campsite-large.jpg"
  )

  Location.create!(
    name: "Mill Creek Marsh",
    camptype: "drive",
    owner_id: 1,
    price: 15,
    description: "It's a bit moist but it's totally legit! First place listed here that's actually a camp place. That's gotta be worth something, right?",
    coordinates: "Mill Creek Marsh Trail Secaucus, NJ 07094",
    max_occupancy: 24,
    water: true,
    bathroom: true,
    photo_url: "https://www.coolcamping.co.uk/system/images/525/jerusalem-farm-large.jpg"
    )

  Location.create!(
    name: "Libery State Park",
    camptype: "drive",
    owner_id: 2,
    price: 35,
    description: "Stay near the famous Liberty Science Center without actually being there! Don't mind all the kids, they're just here on a field trip.",
    coordinates: "200 Morris Pesin Drive Jersey City, NJ 07305",
    max_occupancy: 1,
    water: false,
    bathroom: false,
    photo_url: "http://static1.squarespace.com/static/5285b5cbe4b0f6fc5e481099/t/528ecef7e4b019edff2ce4ed/1385090812546/IMG_0388_1.jpg"
  )

  # Location.create!(
  #   name: "Great spot in Honolulu",
  #   camptype: "wild",
  #   owner_id: 3,
  #   price: 77,
  #   description: "I think there's a few beaches here. I never really checked",
  #   coordinates: "Honolulu, Hawaii",
  #   max_occupancy: 4,
  #   water: true,
  #   bathroom: false,
  #   photo_url: "http://turtlebayvacationrentals.com/blog/wp-content/uploads/2013/04/may-north-shore-oahu-hawaii.jpg"
  # )

  Request.create!(
    location_id: 1,
    requester_id: 2,
    guests_num: 1,
    start_date: "2015-01-02",
    end_date: "2015-01-04"
  )

  Request.create!(
    location_id: 2,
    requester_id: 3,
    guests_num: 4,
    start_date: "2015-02-10",
    end_date: "2015-02-12"
  )

  Request.create!(
    location_id: 3,
    requester_id: 4,
    guests_num: 14,
    start_date: "2015-01-12",
    end_date: "2015-01-16"
  )

  Request.create!(
    location_id: 4,
    requester_id: 1,
    guests_num: 2,
    start_date: "2015-01-13",
    end_date: "2015-01-20"
  )

  Request.create!(
    location_id: 1,
    requester_id: 3,
    guests_num: 1,
    start_date: "2015-01-03",
    end_date: "2015-01-06"
  )

  Request.create!(
    location_id: 1,
    requester_id: 4,
    guests_num: 1,
    start_date: "2015-01-01",
    end_date: "2015-01-02"
  )

  Review.create!(
    reviewer_id: 1,
    location_id: 2,
    body: "Ben Stiller was kind of annoying but overall I had a very good experience. Needs more dinosaurs though."
  )

  Review.create!(
    reviewer_id: 3,
    location_id: 2,
    body: "DUDE I swear I almost died. Mummies were flying everywhere, a sabertooth tiger almost ate me, and the hot dogs were totally expired. A++ would eat again."
  )

  Review.create!(
    reviewer_id: 4,
    location_id: 2,
    body: "I liked the piggies in the front. That's about it."
  )
