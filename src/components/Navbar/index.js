import { Container } from './styles';
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return(
    <Container>
      <div className='left-section'>
        <h1>Moovy</h1>
      </div>
      <div className='right-section'>
        <Link to='#'>
          Search
        </Link>
        <Link to='#'>
          My Library
        </Link>
      </div>
    </Container>
  );
};