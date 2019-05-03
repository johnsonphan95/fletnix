json.array! @movies do |movie| 
    json.extract! movie, :id, :title, :year, :description, :rating, :run_time 
    json.photoUrl url_for(movie.photo)
end