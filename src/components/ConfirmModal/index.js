import { Container } from './styles'
import { useLibraryContext } from '../contexts/useLibraryContext';


export const ConfirmModal = (props) => {

  const { addMovie } = useLibraryContext();


  const removeMovie = (remove) => {
    props.setHidden(true)
    if (remove) {
      addMovie(props.movie)
    }
  }

  return (
    <Container hidden={props.hidden}>
      <div className='black-back'>
        <div className='modal'>
          <h2>Remove from your library</h2>
          <p>
            Are you sure you want to remove from your library?
            {props.movie.filename?
              <span> It contains a audio review and you will lose it if you remove</span>
            :
              ""
            }
          </p>
          <div className='buttons'>
            <div onClick={() => removeMovie(true)}>
              <button className='pink-button'>Remove</button>
            </div>
            <div onClick={() => removeMovie(false)}>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}