import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import { NotFound } from '../../components/NotFound';

export const Search = () => {
  return(
    <Container>
      <Title>Search</Title>
      <div className='content'>
        <NotFound>We couldn't find the movies you were looking for :(</NotFound>
      </div>
    </Container>
  );
};