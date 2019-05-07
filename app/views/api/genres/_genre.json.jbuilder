json.extract! genre, :id, :genre
json.movies genre.movies.map { |movie| movie.id }
json.moviesLength genre.movies.length