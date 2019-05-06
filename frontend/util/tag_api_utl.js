export const fetchTags = () => (
    $.ajax({
        method: "GET", 
        url: 'api/tags'
    })
)

export const fetchTag = (id) => (
    $.ajax({
        method: "GET", 
        url: `api/tags/${id}`
    })
)