import { Container } from './styles'

export const NotFound = (props) => {
  return (
    <Container>
      <div className='search'>
        <div className='circle'/>
        <div className='cable' />
      </div>
      <div className='text'>
        <p>{props.children}</p>
      </div>
    </Container>
  );
}