import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import Rocky from '../../assets/rocky.jpg'
import { useLibraryContext } from '../../components/contexts/useLibraryContext';
import { NotFound } from '../../components/NotFound';

export const MyLibrary = () => {

  const { movies } = useLibraryContext();

  return(
    <Container>
      <Title>My Library</Title>
      <div className='content'>
      { movies.length > 0 ?
        movies.map((movie, index)=>{
          return (
            <Card key={index} movie={movie} added={false}/>
          );
        })
      :
        
        <NotFound>
          It looks like there are no movies in your library!
          Search for a movie you have watched and add it here!
        </NotFound>
      }
      </div>
    </Container>
  );
};