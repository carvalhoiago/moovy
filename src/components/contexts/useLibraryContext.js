import { createContext, useContext, useState} from "react";


const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
  const [movies, setMovies] = useState([])


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
      setMovies(list)
    }else{
      setMovies(oldMovies => [...oldMovies, newMovie]);
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