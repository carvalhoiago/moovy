import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { Buttom } from '../Buttom'
import { useLibraryContext } from '../contexts/useLibraryContext';
import { useEffect, useState } from 'react';
import { ConfirmModal } from '../ConfirmModal';
import { FaPlay } from 'react-icons/fa';
import { Howl } from 'howler';
import { ServerURL } from '../../services/api';

export const Card = (props) => {
  const { addMovie, movies } = useLibraryContext();
  const [added, setAdded] = useState(false);
  const [reviewURL, setReviewURL] = useState("");
  const [hideModal, setHideModal] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setAdded(false)
    movies.forEach((movie, index) => {
      if (movie.imdbID === props.movie.imdbID){
        setAdded(true)
        setReviewURL(movie.filename?`${ServerURL}/${movie.filename}`:"")
      }
    })
  }, [movies, props.movie]);

  const soundPlay = () => {
    const sound = new Howl({
      src: reviewURL,
      html5: true
    })

    sound.play()
  } 

  return (
    <>
      
      <Container>
        <div className='img-container'>
          <img src={props.movie.Poster} alt={props.movie.Title} />
          {
            reviewURL===""?
            ""
            :
            <>
            {showMessage?
              <div className='message'> 
                <div className='message-box'>
                  <p>Listen to Your Audio Review!</p>
                </div>
                <div className='arrow-down'></div>
              </div>
              :
                ''
              }
              <button className='play'
              onClick={()=>soundPlay()}
              onMouseOver={()=>setShowMessage(true)}
              onMouseOut={()=>setShowMessage(false)}
              >
                <FaPlay className='play-icon'/>
              </button>
            </>
          } 
          
        </div>
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