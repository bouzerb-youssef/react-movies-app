import {React ,useState , useEffect }from 'react'
import axios from 'axios'
import ResultCard from './ResultCard'
const Add = () => {
    const [searchValue , setSearchValue]= useState("")
    const [movies , setMovies]= useState([])
    
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=936a8071`)
        .then((response)=>{
         if(response.data.Search){
            setMovies(response.data.Search)
          }
           

        }).catch((error)=>console.log(error))
    },[searchValue])
  return (
    <div>
      <div className='add-page'>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
             type="text"
             placeholder='Search for a movie'
             value={searchValue}
             onChange={(e)=>setSearchValue(e.target.value)}
             
             />           
          </div>
          {movies.length < 0 ? <h1>no movies</h1> :
             <ul className='results'>
             { movies.map((item) => (
              <ResultCard  key={item.imdbID} movie={item} />))}
 
             </ul>}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Add
