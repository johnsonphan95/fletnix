export const fetchMovies = () => (
    $.ajax({
        method: "GET", 
        url: 'api/movies'
    })
)

export const findMovies = (query) => (
    $.ajax({
        method: "GET", 
        url: `api/movies/search/?query=${query}`
    })
)