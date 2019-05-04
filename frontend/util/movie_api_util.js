export const requestMovies = () => (
    $.ajax({
        method: "GET", 
        url: 'api/movies'
    })
)