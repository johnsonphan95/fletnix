json.extract! movie, :id, :title, :year, :description, :rating, :run_time 
json.photoUrl url_for(movie.photo)