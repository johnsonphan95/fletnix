export const fetchMovies = () => (
    $.ajax({
        method: "GET", 
        url: 'api/movies'
    })
)