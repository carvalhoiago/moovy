import styled from 'styled-components'

export const Container = styled.section`

  ${props => props.hidden? "display: none;": ""}
  position: fixed;
  z-index: 1; 

  .black-back{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
  }


  .modal{
    position: fixed;
    width: 1055px;
    height: 346px;
    border-radius: 15px;
    background: white;
    padding: 60px;
    box-sizing: border-box;
    top: 166px;
  }

  .modal h2{
    margin-top: 0;
    font-family: Arial, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    line-height: 34.5px;
    color: black;
  }

  .modal p{
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 23px;
    height: 60%;
  }

  .modal span{
    color: #FE6D8E;
    font-weight: 700;
  }

  .buttons{
    display: flex;
    justify-content: space-between;
  }


  button{
    width: 441px;
    height: 33px;
    background: #A1A1A1;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
    line-height: 34.5px;
    text-align: center;
    color: white;
    border: none;
    border-radius: 10px;
    vertical-align: middle;
  }

  button:hover{
    cursor: pointer;
  }

  .pink-button{
    background: #FE6D8E;
  }
`;