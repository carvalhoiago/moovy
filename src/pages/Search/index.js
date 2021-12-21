import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import { NotFound } from '../../components/NotFound';
import { SearchBar } from '../../components/SearchBar';
import { useState } from 'react';



export const Search = () => {

  const [moviesSearched, setMoviesSearched] = useState([]);

  return(
    <Container>
      <Title>Search</Title>
      <div className='search-box'>
        <SearchBar setState={setMoviesSearched}/>
      </div>
      <div className='content'>
      { moviesSearched.length > 0 ?
        moviesSearched.map((movieSearched, index)=>{
          return (
            <Card key={index} movie={movieSearched} added={false}/>
          );
        })
      :
        
        <NotFound>We couldn't find the movies you were looking for :(</NotFound>
      }
      </div>
    </Container>
  );
};