export const fetchGenres = () => (
    $.ajax({
        method: "GET",
        url: 'api/genres'
    })
)

export const fetchGenre = (id) => (
    $.ajax({
        method: "GET", 
        url: `api/genres/${id}`
    })
)

export const findGenres = (query) => {
    $.ajax({
        method: "GET",
        url: `api/genres/search/?query=${query}`
    })
}