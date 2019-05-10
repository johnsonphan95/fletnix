require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# apex.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/apex.webp"), filename: "9")

User.destroy_all
Movie.destroy_all
Genre.destroy_all
MovieGenre.destroy_all

demoUser = User.create(email: "demo@fletnix.com", password: "password")
tarzan = Movie.create(title: "Tarzan", description: "After being shipwrecked off the African coast, a lone child grows up in the wild, and is destined to become lord of the jungle.", year: 1999, rating: "G", run_time: "1h 28m") 
tarzan.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/fletnix-seeds/tarzan.webp'), filename: "1")
tarzan.video.attach(io: open('https://s3-us-west-1.amazonaws.com/fletnix-seeds/tarzan.mp4'), filename: "1.mp4")
avengers = Movie.create(title: "Avengers: Infinity War", description: "Superherokes amass to stop intergalactic sociopath Thanos from acquiring a full set of Infinity Stones and wiping out half of all life in the universe.", year: 2018, rating: "PG-13", run_time: "2h 29m")
avengers.photo.attach(io: open('https://s3-us-west-1.amazonaws.com/fletnix-seeds/avengers.webp'), filename: "avengers")
avengers.video.attach(io: open('https://s3-us-west-1.amazonaws.com/fletnix-seeds/avengers.mp4'), filename: "avengers.mp4")
forty = Movie.create(title: "The 40 Year-Old Virgin", description: "At age 40, there's one thing Andy hasn't done, and it's really bothering the sex-obsessed guys at work, who set out to help him get laid.", year: 2005,rating: "R", run_time: "1h 56m")
forty.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/40yroldv.webp"), filename: "2")
forty.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/40yearold.mp4"), filename: "2.mp4")


incredibles2 = Movie.create(title: "The Incredibles 2", description: "When Elastigirl gets recruited for a high-profile, crime-fighting mission, Mr. Incredible takes on his toughest assignment ever: full-time parenting.", year: 2018, rating: "PG", run_time: "1h 57m") 
incredibles2.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/incred2.webp"), filename: "incred2")
incredibles2.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/incred2.mp4"), filename: "incred2.mp4")

imitation = Movie.create(title: "The Imitation Game", description: "During World War II, a mathematician leads a team of cryptanalysts as they work feverishly to break the German's notorious Enigma code.", year: 2014, rating: "PG-13", run_time: "1h 53m") 
imitation.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/imitation.webp"), filename: "imitiation")
imitation.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/imitation.mp4"), filename: "imitation.mp4")
ragnarok = Movie.create(title: "Thor: Ragnarok", description: "When it rains, it pours for the God of Thunder. Stuck on a cosmic scrapheap, he's being hammered from all sides.", year: 2017, rating: "PG-13", run_time: "2h 11m") 
ragnarok.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/ragnarok.webp"), filename: "ragnarok")
ragnarok.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/ragnarok.mp4"), filename: "ragnarok.mp4")

bolt = Movie.create(title: "Bolt", description: "Can a famous dog learn that he doesn't need superpowers to still be super? With good friends, anything is possible.", year: 2008, rating: "PG", run_time: "1h 38m") 
bolt.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/bolt.webp"), filename: "bolt")
bolt.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/bolt.mp4"), filename: "bolt.mp4")
mulan = Movie.create(title: "Mulan", description: "Disney brings an ancient legend to life in this animated tale of a tomboy who disguises herself as a man so she can fight with the Chinese Army.", year: 1998, rating: "G", run_time: "1h 29m") 
mulan.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/mulan.webp"), filename: "mulan")
mulan.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/mulan.mp4"), filename: "mulan.mp4")
marys = Movie.create(title: "Mary and the Witch's Flower", description: "Ordinary girl Mary picks an extraordinary flower and travels to Endor College, a school for magic. But its foremost teachers have a sinister plan.", year: 2018, rating: "PG", run_time: "1h 43m") 
marys.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/marys.webp"), filename: "marys")
marys.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/marys.mp4"), filename: "marys.mp4")
caroline = Movie.create(title: "Coraline", description: "Curious young Coraline unlocks a door in her family's home and is transported to a universe that strangely resembles her own -- only better.", year: 2009, rating: "PG", run_time: "1h 40m") 
caroline.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/caroline.webp"), filename: "coraline")
caroline.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/coraline.mp4"), filename: "coraline.mp4")


blackfish = Movie.create(title: "Blackfish", description: "The fascinating documentary examines the ife of performing killer whale Tilikum, who has caused the deaths of several people while in captivity.", year: 2013,rating: "PG-13", run_time: "1h 23m")
blackfish.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/blackfish.webp"), filename: "4")
blackfish.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/blackfish1.mp4"), filename: "4.mp4")
coco = Movie.create(title: "Coco", description: "Music is his life, but it's forbidden in his family. To understand why, he'll have to speak to his ancestor in person.", year: 2017, rating: "PG", run_time: "1h 45m")
coco.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/coco.webp"), filename: "6")
coco.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/coco.mp4"), filename: "6.mp4")
exmachina = Movie.create(title: "Ex Machina", description: "A coder at a tech company wins a week-long retreat at the compound of his company's CEO, where he's tasked with testing a new artificial intelligence.", year: 2015, rating: "R", run_time: "1h 48m")
exmachina.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/exmachina.webp"), filename: "8")
exmachina.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/exmachina.mp4"), filename: "8")
hercules = Movie.create(title: "Hercules", description: "The heavenly Hercules is stripped of his immortality and raised on Earth instead of Olympus, where he's forced to take on Hades and assorted monsters.", year: 1997, rating: "G", run_time: "1h 34m") 
hercules.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/hercules.webp"), filename: "12")
hercules.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/hercules.mp4"), filename: "12.mp4")
killbill = Movie.create(title: "Kill Bill: Vol 1", description: "A former assassin left for dead will stop at nothing to exact her revenge. Can she hold back and army.", year: 2003, rating: "R", run_time: "1h 50m") 
killbill.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/killbill.webp"), filename: "15")
killbill.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/killbill.mp4"), filename: "15.mp4")
oldmen = Movie.create(title: "No Country for Old Men", description: "A drug deal gone bad and a bag full of cash entwine an unsuspecting hunter, a veteran sheriff and a murderous hit man in the stark West Texas desert.", year: 2007, rating: "R", run_time: "2h 2m") 
oldmen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/nocountryoldmen.webp"), filename: "16")
oldmen.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/nocountry.mp4"), filename: "16.mp4")
pineapplex = Movie.create(title: "Pineapple Express", description: "In this stoner buddy comedy, a lazy pothead must go on the run with his dealer after witnessing a murder involving a corrup cop and a drug kingpin.", year: 2008, rating: "R", run_time: "1h 52m") 
pineapplex.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pineapplex.webp"), filename: "17")
pineapplex.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pineapplex.mp4"), filename: "17.mp4")
pulpfiction = Movie.create(title: "Pulp Fiction", description: "This stylized crime caper weaves together stories featuring a burger-loving hit man, his philosophical partner and a washed up boxer.", year: 1994, rating: "R", run_time: "2h 34m") 
pulpfiction.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pulpfiction.webp"), filename: "18")
pulpfiction.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/pulpfiction.mp4"), filename: "18.mp4")
zombieland = Movie.create(title: "Zombieland", description: "Looking to survive in a world taken over by zombies, a dorky college student teams with an urban roughneck and a pair of grifter sisters.", year: 2009, rating: "G", run_time: "1h 27m") 
zombieland.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/zombieland.webp"), filename: "20")
zombieland.video.attach(io: open("https://s3-us-west-1.amazonaws.com/fletnix-seeds/zombieland.mp4"), filename: "20.mp4")

# genre1 = Genre.create(genre: "Popular on Fletnix")
genre2 = Genre.create(genre: "Trending Now")
genre3 = Genre.create(genre: "Recently Added")
genre4 = Genre.create(genre: "Comedy")
genre5 = Genre.create(genre: "Drama")
genre6 = Genre.create(genre: "Animation")

MovieGenre.create(movie_id: tarzan.id, genre_id: genre2.id)
MovieGenre.create(movie_id: tarzan.id, genre_id: genre6.id)
MovieGenre.create(movie_id: forty.id, genre_id: genre4.id)
MovieGenre.create(movie_id: forty.id, genre_id: genre2.id)
MovieGenre.create(movie_id: blackfish.id, genre_id: genre3.id)
MovieGenre.create(movie_id: coco.id, genre_id: genre3.id)
MovieGenre.create(movie_id: coco.id, genre_id: genre6.id)
MovieGenre.create(movie_id: coco.id, genre_id: genre2.id)
MovieGenre.create(movie_id: exmachina.id, genre_id: genre5.id)
MovieGenre.create(movie_id: exmachina.id, genre_id: genre3.id)
MovieGenre.create(movie_id: exmachina.id, genre_id: genre2.id)
MovieGenre.create(movie_id: killbill.id, genre_id: genre5.id)
MovieGenre.create(movie_id: killbill.id, genre_id: genre2.id)
MovieGenre.create(movie_id: hercules.id, genre_id: genre6.id)
MovieGenre.create(movie_id: oldmen.id, genre_id: genre5.id)
MovieGenre.create(movie_id: oldmen.id, genre_id: genre3.id)
MovieGenre.create(movie_id: zombieland.id, genre_id: genre3.id)
MovieGenre.create(movie_id: zombieland.id, genre_id: genre2.id)
MovieGenre.create(movie_id: zombieland.id, genre_id: genre4.id)
MovieGenre.create(movie_id: pulpfiction.id, genre_id: genre5.id)
MovieGenre.create(movie_id: pulpfiction.id, genre_id: genre2.id)
MovieGenre.create(movie_id: pulpfiction.id, genre_id: genre3.id)
MovieGenre.create(movie_id: avengers.id, genre_id: genre4.id)
MovieGenre.create(movie_id: avengers.id, genre_id: genre5.id)
MovieGenre.create(movie_id: avengers.id, genre_id: genre2.id)
MovieGenre.create(movie_id: avengers.id, genre_id: genre3.id)
MovieGenre.create(movie_id: incredibles2.id, genre_id: genre6.id)
MovieGenre.create(movie_id: incredibles2.id, genre_id: genre2.id)
MovieGenre.create(movie_id: incredibles2.id, genre_id: genre3.id)
MovieGenre.create(movie_id: imitation.id, genre_id: genre5.id)
MovieGenre.create(movie_id: imitation.id, genre_id: genre2.id)
MovieGenre.create(movie_id: ragnarok.id, genre_id: genre3.id)
MovieGenre.create(movie_id: ragnarok.id, genre_id: genre2.id)
MovieGenre.create(movie_id: ragnarok.id, genre_id: genre4.id)
MovieGenre.create(movie_id: pineapplex.id, genre_id: genre2.id)
MovieGenre.create(movie_id: pineapplex.id, genre_id: genre4.id)
MovieGenre.create(movie_id: bolt.id, genre_id: genre6.id)
MovieGenre.create(movie_id: caroline.id, genre_id: genre6.id)
MovieGenre.create(movie_id: marys.id, genre_id: genre6.id)
MovieGenre.create(movie_id: marys.id, genre_id: genre3.id)
MovieGenre.create(movie_id: mulan.id, genre_id: genre6.id)
MovieGenre.create(movie_id: mulan.id, genre_id: genre2.id)
MovieGenre.create(movie_id: mulan.id, genre_id: genre4.id)
MovieGenre.create(movie_id: incredibles2.id, genre_id: genre4.id)
MovieGenre.create(movie_id: zombieland.id, genre_id: genre5.id)
MovieGenre.create(movie_id: hercules.id, genre_id: genre4.id)
MovieGenre.create(movie_id: blackfish.id, genre_id: genre5.id)







