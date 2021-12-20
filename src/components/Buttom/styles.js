import styled from 'styled-components';

export const Container = styled.section`
  button{
    width: 274px;
    height: 46px;
    background: #FE6D8E;
    border: none;
    border-radius: 15px;
    position: relative;
  }

  span{
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: 27.6px;
    color: rgba(0,0,0,0.5);
  }

  button:hover{
    cursor: pointer;
  }

  .icon{
    position: absolute;
    width: 30px;
    height: 30px;
    left: 30px;
    top: 8px;
    color: red;
  }
`;