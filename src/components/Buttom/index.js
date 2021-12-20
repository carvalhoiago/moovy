import { Container } from './styles'
import { IoLibraryOutline } from 'react-icons/io5'

export const Buttom = () => {
  return(
    <Container>
      <button>
        <IoLibraryOutline className='icon'/>
        <span>Remove</span>
      </button>
    </Container>
  );
}