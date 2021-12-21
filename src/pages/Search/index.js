import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import { NotFound } from '../../components/NotFound';
import { SearchBar } from '../../components/SearchBar';
import { useState } from 'react';



export const Search = () => {

  const [movies, setMovies] = useState([]);

  return(
    <Container>
      <Title>Search</Title>
      <div className='search-box'>
        <SearchBar setState={setMovies}/>
      </div>
      <div className='content'>
      { movies.length > 0 ?
        movies.map((movie, index)=>{
          return (
            <Card key={index} url={movie.Poster} title={movie.Title}/>
          );
        })
      :
        
        <NotFound>We couldn't find the movies you were looking for :(</NotFound>
      }
      </div>
    </Container>
  );
};