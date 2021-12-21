import styled from 'styled-components';

export const Container = styled.section`
  
  input{
    border: none;
    width: 442px;
    max-width: 442px;
    height: 34px;
    background: white;
    border-radius: 15px;
  }
  button{
    height: 34px;
    width: 34px;
    margin-left: -45px;
    background: none;
    border:none;
    .icon{
      height: 25px;
      width: auto;
      vertical-align: middle;
    }
  }

  button:hover{
    cursor: pointer;
  }
`;