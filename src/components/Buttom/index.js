import { Container } from './styles'
import { IoLibraryOutline } from 'react-icons/io5'

export const Buttom = (props) => {
  return(
    <Container>
      <button className={props.added?'red':'green'}>
        <IoLibraryOutline className='icon'/>
        <span>{props.added?'Remove':'Add to My Library'}</span>
      </button>
    </Container>
  );
}