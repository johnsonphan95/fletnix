export const mainMovie = (movies) => {
    let movie = Object.values(movies).filter(movie => movie.title === "Avengers: Infinity War")[0];

    if (movie === undefined) {
        return null
    } else {
        return movie
    }
}