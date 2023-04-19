import React from 'react'
import { UseMovieContext } from './context/GlobalContext'
import { MovieCard } from './MovieCard'
const Watched = () => {
  const moviesContext=UseMovieContext()
  return (
    
      <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
          <h1 className='heading'>My Watchlist</h1>
        <span className='count-pill'>
          fhdfghfghfghf</span>
      </div>
          
      {moviesContext.watched.length > 0 ?
          <div className="movie-grid">
         { moviesContext.watched.map((movie)=><MovieCard movie={movie}/>)}
         </div>: <h2  className='no-movies'>No movies in your  wached list, add some!</h2> }
        
       
        </div>
      </div>
    </div>
    
  )
}

export default Watched
