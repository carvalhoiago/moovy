import { Container } from './styles';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import Rocky from '../../assets/rocky.jpg'

export const MyLibrary = () => {
  return(
    <Container>
      <Title>My Library</Title>
      <div className='content'>
        <Card url={Rocky} title='Rocky IV'></Card>
        <Card url={Rocky} title='Rocky IV'></Card>
        <Card url={Rocky} title='Rocky IV'></Card>
        <Card url={Rocky} title='Rocky IV'></Card>
        <Card url={Rocky} title='Rocky IV'></Card>
        <Card url={Rocky} title='Rocky IV'></Card>
      </div>
    </Container>
  );
};