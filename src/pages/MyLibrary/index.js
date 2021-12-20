import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';

export const MyLibrary = () => {
  return(
    <Container>
      <Title>My Library</Title>
      <div className='content'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </Container>
  );
};