import { Container } from './styles'
import Rocky from '../../assets/rocky.jpg'
import { AiFillStar } from 'react-icons/ai'
import { Buttom } from '../Buttom'

export const Card  = (props) => {
  return(
    <Container>
      <img src={props.url} alt={props.title}/>
      <div className='movie-info'>
        <div className='movie-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='movie-rating'>
        <AiFillStar className='star-icon'/>
          <h2>8.2</h2>
        </div>
      </div>
      <Buttom/>
    </Container>
  );
};