# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all

demoUser = User.create(email: "demo@fletnix.com", password: "password")
tarzan = Movie.create(title: "Tarzan", description: "Swinging deez vines", year: 1999, rating: "G", run_time: "1h 28m") 
# arzan1 = Movie.create(title: "Tarzan", description: "Swinging deez vines", year: 1999, rating: "G", run_time: "1h 28m") 
# tarzan1_image = open('s3 html')
# tarzan1.photo.attach(io: tarzan1_image, filename: "something")t