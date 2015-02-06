# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


  User.create!(username: "Ron", password: "ronron", avatar_url: "http://img3.wikia.nocookie.net/__cb20140410195936/pokemon/images/archive/e/e1/20150101093317!025Pikachu_OS_anime_4.png")
  User.create!(username: "dood", password: "doodle", avatar_url: "http://media.moddb.com/images/members/3/2475/2474536/ao_Sleepy_Kitties.png")
  User.create!(username: "algore", password: "president", avatar_url: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2012/09/pokemon_bulbasaur_desktop_1057x1132_wallpaper-369004-610x653.png")
  User.create!(username: "Janky", password: "yoyoyo", avatar_url: "http://www.dltk-kids.com/pokemon/adoptions/122.gif")
  User.create!(username: "Antone", password: "achang". avatar_url: "http://img.pokemondb.net/artwork/mudkip.jpg")
  User.create!(username: "DrOsey", password: "bbaall". avatar_url: "http://img2.wikia.nocookie.net/__cb20140810044703/pokemon/images/c/ce/133Eevee_BW_anime.png")
  User.create!(username: "Jstew", password: "daysho". avatar_url: "http://pokiidex.com/Content/Images/043_oddish.png")




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

  Location.create!(
    name: "Great spot in Honolulu",
    camptype: "wild",
    owner_id: 3,
    price: 77,
    description: "I think there's a few beaches here. I never really checked",
    coordinates: "Honolulu, Hawaii",
    max_occupancy: 21,
    water: true,
    bathroom: false,
    photo_url: "http://turtlebayvacationrentals.com/blog/wp-content/uploads/2013/04/may-north-shore-oahu-hawaii.jpg"
  )

  Location.create!(
    name: "A place called Makawao?",
    camptype: "wild",
    owner_id: 5,
    price: 77,
    description: "I decided to buy this place but I've never actually been there yet. I guess someone should enjoy it.",
    coordinates: "3351 Iolani St. Makawao, HI 96768",
    max_occupancy: 4,
    water: true,
    bathroom: false,
    photo_url: "http://static1.squarespace.com/static/514e40ffe4b0e29595fe765d/t/543accbbe4b08c0fddfb2c36/1413139648851/"
  )

  Location.create!(
    name: "Kula Forest Reserve",
    camptype: "wild",
    owner_id: 2,
    price: 23,
    description: "Beautiful island getaway. Almost too popular recently. Actually I shouldn't even post this up. Not like I need the money.",
    coordinates: "Kula, Hawaii",
    max_occupancy: 43,
    water: true,
    bathroom: false,
    photo_url: "http://www.hawaiiboundvacations.com/wp-content/uploads/2014/09/Oceanfront-Paradise-Maui-Villa-sunset-balcony.jpg"
  )

  Location.create!(
    name: "Hilo Watershed Forest Reserve",
    camptype: "drive",
    owner_id: 7,
    price: 34,
    description: "This one's not as nice as the other islands, but I assure you, it's still pretty cool. Don't mind the bugs.",
    coordinates: "Honolulu, Hawaii",
    max_occupancy: 4,
    water: false,
    bathroom: false,
    photo_url: "http://www.hawaiiconservation.org/images/uploads/pages/Jan19_flyover_198.JPG"
  )

  Location.create!(
    name: "Palaau State Park",
    camptype: "wild",
    owner_id: 3,
    price: 77,
    description: "It's pretty close to the airport but I think you'll still have a good time. Great access to the water and great tent platforms.",
    coordinates: "Highway 47 Ho'olehua, HI 96729",
    max_occupancy: 4,
    water: true,
    bathroom: false,
    photo_url: "http://turtlebayvacationrentals.com/blog/wp-content/uploads/2013/04/may-north-shore-oahu-hawaii.jpg"
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
  #
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
  #
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
  #
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
