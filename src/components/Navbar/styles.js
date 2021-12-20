import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 110px;
  max-height: 110px;
  background: #8F8F8F;
  display: flex;
  font-family: 'Inter';

  .left-section{
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
  }

  .right-section{
    position: absolute;
    left: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .left-section h1{
    color: #F2911B;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    
    position: relative;
    left: 47px;
  }

  .right-section a{
    margin-right: 80px;
    text-decoration: none;
    color: black;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    
  }
  .current-path {
      color: #F2911B !important;
    }
  

`;