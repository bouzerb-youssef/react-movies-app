import React from 'react'
import { UseMovieContext } from './context/GlobalContext'

import * as actions from "./context/ActionTypes";
import reducerx from './context/reducer';



const ResultCard = ({movie}) => {
  const movieContext=UseMovieContext()
  const storedMovie =movieContext.watchlist.find(element=>element.imdbID ==movie.imdbID)
  const storedMovieWatched =movieContext.watched.find(element=>element.imdbID ==movie.imdbID)

  const whachedDisable=storedMovieWatched ? true : false ;

  const whachListDisable=storedMovie ? true :storedMovieWatched? true: false ;
  
 
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
          
                    <img src={movie.Poster} ></img>
                 <div className='filter-poster'></div>
            
        </div>
        <div className="info">
            <div className="header">
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "----"}
                
                
            </div>
        
        <div className="controls">
            
        <button className='btn' disabled={whachListDisable} onClick={()=>movieContext.MoviesDispatch({
          type:actions.ADD_MOVIE_TO_WATCHLIST,
          payload:movie
           })}  >Add to Watchlist  </button>

        <button className='btn'  disabled={whachedDisable} onClick={()=> movieContext.MoviesDispatch({
          type:actions.ADD_MOVIE_TO_WATCHED,
          payload:movie
           }) 
           
        }  >Add to watched  </button>
            
             
             
           
           
        </div>
        </div>
    </div>
  )
}

export default ResultCard
