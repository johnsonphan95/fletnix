export const mainMovie = (movies) => {
    let movie = Object.values(movies).filter(movie => movie.title === "The Incredibles 2")[0];

    if (movie === undefined) {
        return null
    } else {
        return movie
    }
}