import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { Buttom } from '../Buttom'
import { useLibraryContext } from '../contexts/useLibraryContext';
import { useEffect, useState } from 'react';
import { ConfirmModal } from '../ConfirmModal';

export const Card = (props) => {
  const { addMovie, movies } = useLibraryContext();
  const [added, setAdded] = useState(false);
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    setAdded(false)
    movies.forEach((movie, index) => {
      if (movie.imdbID === props.movie.imdbID)
        setAdded(true)
    })
  }, [movies, props.movie]);


  return (
    <>
      
      <Container>
      
        <img src={props.movie.Poster} alt={props.movie.Title} />
        <div className='movie-info'>
          <div className='movie-title'>
            <h2>{props.movie.Title}</h2>
          </div>
          <div className='movie-rating'>
            <AiFillStar className='star-icon' />
            <h2>8.2</h2>
          </div>
        </div>
        <div onClick={() => added? setHideModal(false) : addMovie(props.movie)}>
          <Buttom added={added} />
        </div>
      </Container>
      {!hideModal? 
        <ConfirmModal movie={props.movie} hidden={hideModal} setHidden={setHideModal}/>
        :
        <></>
      }
      
    </>
  );
};