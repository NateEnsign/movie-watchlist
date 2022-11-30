import React from 'react'
import MovieCard from './MovieCard'

const MovieScreen = ({list, page, setPage, movieList}) => {

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} />
    })

    return (
        <div className="page">
            <h1>Nate's Movie Theatre</h1>
            <h3>Add a Movie to Your Watchlist:</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen