export const trendingId = (genres) => {
    let trendingId = Object.values(genres).filter(genre => genre.genre === "Trending Now")[0];

    if (trendingId === undefined) { 
        return null
    } else {
        return trendingId.id
    }
}

export const recentId = (genres) => {
    let recentId = Object.values(genres).filter(genre => genre.genre === "Recently Added")[0];

    if (recentId === undefined) { 
        return null
    } else {
        return recentId.id
    }
}

