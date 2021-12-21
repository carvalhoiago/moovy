import { Container } from './styles'

export const Title = (props) => {
  return(
    <Container>
      <h1>{props.children}</h1>
    </Container>
  );
};