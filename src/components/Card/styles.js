import styled from 'styled-components'

export const Container = styled.section`
  height: 548px;
  width: 326px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  img{
    margin:0;
    margin-top: 15px;
    height: 420px;
    width: 300px;
    border-radius: 10px;
  }

  .movie-info, .movie-title, .movie-rating{
    height: 35px;
  }

  .movie-info{
    margin: 0;
    width: 250px;
    display: flex;
    justify-content: space-between;
  }

  .movie-info h2{
    margin: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 27.6px;
    color: black;
  }

  .movie-rating{
    display: flex;

    h2{
      color: #434670;
      margin: auto;
      margin-left: 5px;
    }
  }

  .star-icon{
    color: #FCC419;
    height: 31px;
    width: 27px;
  }
`;