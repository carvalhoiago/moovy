import { createContext, useContext, useState, useEffect} from "react";


const LibraryContext = createContext();

const LibraryProvider = ({children}) => {
  const [movies, setMovies] = useState([])

  const addMovie = (id,name, photo_url, rating) => {
    const newMovie = {
      id: id,
      name: name,
      photo_url: photo_url,
      rating: rating
    }

    setMovies(oldMovies => [...oldMovies, newMovie]);
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