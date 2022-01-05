import { createContext, useContext, useState, useEffect} from "react";
import { LocalDBapi } from "../../services/api";


const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    LocalDBapi.get('/movies')
    .then((response)=>{
      if(response.status === 200){
        setMovies(response.data)
      }
    })
  },[])


  const addMovie = (newMovie) => {
    let included = false;
    const list = []
    movies.forEach((movie, index)=>{
      if (movie.imdbID === newMovie.imdbID){
        included = true;
      }else {
        list.push(movie)
      }
    })
    if (included){
      LocalDBapi.delete('/movies/'+newMovie.imdbID)
      .then((response)=>{
        if(response.status === 200){
          setMovies(list)
        }
      })
    }else{
      LocalDBapi.post('/movies/', newMovie)
      .then((response)=>{
        if(response.status === 200){
          setMovies(oldMovies => [...oldMovies, newMovie]);
        }
      })
    }  
  }

  return (
    <LibraryContext.Provider value={{movies, addMovie}}>
        {children}
    </LibraryContext.Provider>
)
}

export const useLibraryContext = () => {
  const context = useContext(LibraryContext);

  return context;
}

export default LibraryProvider;