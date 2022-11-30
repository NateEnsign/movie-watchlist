import React from 'react'

const MovieScreen = ({list, page, setPage, movieList}) => {

    const movieDisplay = movieList.map((movie, index) => {
        return <h2>{movie.original_title}</h2>;
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