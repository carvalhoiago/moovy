import styled from 'styled-components'

export const Container = styled.section`
  width: 300px;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  *{
    margin:0;
  }
  .circle{
    width: 110px;
    height: 110px;
    border: 2.5px solid black;
    border-radius: 50%;
  }
  .cable{
    width: 70px;
    height: 70px;
    border-bottom: 2.5px solid black;
    -webkit-transform:
      translateY(-60px)
      translateX(110px)
      rotate(45deg); 
  }

  .text{
    width: 300px;
    text-align: center;
  }

  .text p{
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: 27.6px;
    color: #A1A1A1;
  }
`;