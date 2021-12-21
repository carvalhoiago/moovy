import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { Buttom } from '../Buttom'
import { useLibraryContext } from '../contexts/useLibraryContext';
import { useEffect, useState } from 'react';

export const Card  = (props) => {
  const { addMovie, movies } = useLibraryContext();
  const [added, setAdded] = useState(false);

  useEffect(()=>{
    setAdded(false)
    movies.map((movie, index)=>{
      if (movie.imdbID === props.movie.imdbID)
        setAdded(true)
    })
    console.log(movies)
  },[movies, props.movie]);

  return(
    <Container>
      <img src={props.movie.Poster} alt={props.movie.Title}/>
      <div className='movie-info'>
        <div className='movie-title'>
          <h2>{props.movie.Title}</h2>
        </div>
        <div className='movie-rating'>
        <AiFillStar className='star-icon'/>
          <h2>8.2</h2>
        </div>
      </div>
      <div onClick={()=>addMovie(props.movie)}>
        <Buttom added={added} />
      </div>
    </Container>
  );
};