require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# apex = Movie.create(title: "Tarzan", description: "", year: 1999, rating: "G", run_time: "1h 28m") 
# apex.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/apex.webp"), filename: "9")

User.destroy_all
Movie.destroy_all

demoUser = User.create(email: "demo@fletnix.com", password: "password")
tarzan = Movie.create(title: "Tarzan", description: "After being shipwrecked off the African coast, a lone child grows up in the wild, and is destined to become lord of the jungle.", year: 1999, rating: "G", run_time: "1h 28m") 
tarzan.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/fletnix-seeds/tarzan.webp'), filename: "1")
forty = Movie.create(title: "The 40 Year-Old Virgin", description: "At age 40, there's one thing Andy hasn't done, and it's really bothering the sex-obsessed guys at work, who set out to help him get laid.", year: 2005,rating: "R", run_time: "1h 56m")
forty.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/40yroldv.webp"), filename: "2")
aliwong = Movie.create(title: "Ali Wong: Baby Cobra", description: "She's fierce, filthy and very pregnant. And after finally finding her Mr. Perfect, she dreams of never working again.", year: 2016,rating: "TV-MA", run_time: "1h")
aliwong.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/aliwong.jpg"), filename: "3")
blackfish = Movie.create(title: "Blackfish", description: "The fascinating documentary examines the ife of performing killer whale Tilikum, who has caused the deaths of several people while in captivity.", year: 2013,rating: "PG-13", run_time: "1h 23m")
blackfish.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/blackfish.webp"), filename: "4")
blackmirrorbander = Movie.create(title: "Black Mirror Bandersnatch", description: "in 1984, a young programmer begins to question reality as he adapts a dark fantasy novel into a video game. A mind-bending tale with multiple endings.", year: 2018, rating: "TV-MA", run_time: "1h 30m")
blackmirrorbander.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/blackmirrorbander.jpg"), filename: "5")
coco = Movie.create(title: "Coco", description: "Music is his life, but it's forbidden in his family. To understand why, he'll have to speak to his ancestor in person.", year: 2017, rating: "PG", run_time: "1h 45m")
coco.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/coco.webp"), filename: "6")
chrisrock = Movie.create(title: "Chris Rock: Tamborine", description: "Chris Rock takes the stage in Brooklyn for a comedy special filled with searing observations on fatherhood, infidelity and American politics.", year: 2018, rating: "TV-MA", run_time: "1h 30m")
chrisrock.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/chrisrock.jpg"), filename: "7")
exmachina = Movie.create(title: "Ex Machina", description: "A coder at a tech company wins a week-long retreat at the compound of his company's CEO, where he's tasked with testing a new artificial intelligence.", year: 2015, rating: "R", run_time: "1h 48m")
exmachina.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/exmachina.webp"), filename: "8")
apex = Movie.create(title: "Apex: Story of the Hypercar", description: "A visionary carmaker introduces his fuel-efficient, high-performance hypercar to a market filled with big-name competitors like Ferrari and Porsche", year: 2016, rating: "NR", run_time: "1h 25m")
apex.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/apex.webp"), filename: "9")
hatefuleight = Movie.create(title: "The Hateful Eight", description: "Seven men, one woman, one snowed-in coach stop. They're all headed to Red Rock. But will any reach their destination?", year: 2015, rating: "R", run_time: "2h 47m") 
hatefuleight.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/hatefuleight.webp"), filename: "10")
her = Movie.create(title: "Her", description: 'In a Los Angeles of the slight future, a lonely write develops a relationship with "Samanta", an insightful and sensitive artificial entity', year: 2013, rating: "R", run_time: "2h 5m") 
her.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/her.webp"), filename: "11")
hercules = Movie.create(title: "Hercules", description: "The heavenly Hercules is stripped of his immortality and raised on Earth instead of Olympus, where he's forced to take on Hades and assorted monsters.", year: 1997, rating: "G", run_time: "1h 34m") 
hercules.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/hercules.webp"), filename: "12")
highwaymen = Movie.create(title: "The Highwaymen", description: "Two steely former Texas Rangers are tasked with tracking and killing infamous criminals Bonnie and Clyde in this crime drama based on real events.", year: 2019, rating: "R", run_time: "2h 12m") 
highwaymen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/highwaymen.jpg"), filename: "13")
icarus = Movie.create(title: "Icarus", description: "In his Oscar-winning film, an American cyclist plunges into a vast doping scandal involving a Russian scienties -- Putin's most-wanted whistleblower.", year: 2017, rating: "TV-MA", run_time: "2h 1m") 
icarus.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/icarus.jpg"), filename: "14")
killbill = Movie.create(title: "Kill Bill: Vol 1", description: "A former assassin left for dead will stop at nothing to exact her revenge. Can she hold back and army.", year: 2003, rating: "R", run_time: "1h 50m") 
killbill.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/killbill.webp"), filename: "15")
oldmen = Movie.create(title: "No Country for Old Men", description: "A drug deal gone bad and a bag full of cash entwine an unsuspecting hunter, a veteran sheriff and a murderous hit man in the stark West Texas desert.", year: 2007, rating: "R", run_time: "2h 2m") 
oldmen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/nocountryoldmen.webp"), filename: "16")
pineapplex = Movie.create(title: "Pineapple Express", description: "In this stoner buddy comedy, a lazy pothead must go on the run with his dealer after witnessing a murder involving a corrup cop and a drug kingpin.", year: 2008, rating: "R", run_time: "1h 52m") 
pineapplex.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pineapplex.webp"), filename: "17")
pulpfiction = Movie.create(title: "Pulp Fiction", description: "This stylized crime caper weaves together stories featuring a burger-loving hit man, his philosophical partner and a washed up boxer.", year: 1994, rating: "R", run_time: "2h 34m") 
pulpfiction.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pulpfiction.webp"), filename: "18")
takeyourpills = Movie.create(title: "Take Your Pills", description: "In a hypercompetitive world, drugs like Adderall offer students, athletes, coders and others a way to do more -- faster and better. But at what cost?", year: 2018, rating: "TV-14", run_time: "1h 27m") 
takeyourpills.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/takeyourpills.jpg"), filename: "19")
zombieland = Movie.create(title: "Zombieland", description: "Looking to survive in a world taken over by zombies, a dorky college student teams with an urban roughneck and a pair of grifter sisters.", year: 2009, rating: "G", run_time: "1h 27m") 
zombieland.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/zombieland.webp"), filename: "20")



