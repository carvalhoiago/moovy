import styled from 'styled-components';

export const Container = styled.section`
  button{
    width: 274px;
    height: 46px;
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
    left: 10px;
    top: 8px;
    
  }

  .red .icon{
    color: red;
  }

  .red {
    background: #FE6D8E;
  }

  .green .icon{
    color: green;
  }

  .green {
    background: #0ACF83;
  }
`;