import { Container } from './styles';
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation();
  return(
    <Container>
      <div className='left-section'>
        <h1>Moovy</h1>
      </div>
      <div className='right-section'>
        <Link to='/search' className={location.pathname === '/search'?'current-path':''}>
          Search
        </Link>
        <Link to='/' className={location.pathname === '/'?'current-path':''}>
          My Library
        </Link>
      </div>
    </Container>
  );
};