import styled from 'styled-components'

export const Container = styled.section`
  height: 548px;
  width: 326px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  .img-container{
    position: relative;
    margin:0;
    margin-top: 15px;
    height: 420px;
    width: 300px;
    border-radius: 10px;
  }

  .play{
    display: flex;
    position: absolute;
    height: 100px;
    width: 100px;
    top: 160px;
    left: 100px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.9);
    border: none;
    justify-content: center;
    align-items: center;
  }

  .message{
    display: flex;
    position: absolute;
    top: 40px;
    left: 37px;
    justify-content: center;
    flex-wrap: wrap;
    width: 226px;
    height: 120px;
    box-sizing: border-box;
    margin: 0;
  }

  .message-box{
  width: 226px;
  height: 104px;
  margin: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  p{
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    max-width: 190px;
    color: #000000;
    margin: 0;
  }
  }

.arrow-down{
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent; 
  border-top: 15px solid rgba(255, 255, 255, 0.9);;
  margin: 0;
  margin-top:-1px; 
}

  .play:hover{
    cursor: pointer;
  }

  .play-icon{
    width: 52px;
    height: 52px;
    color: rgba(18, 21, 61, 0.9);
    margin-left: 10px;
    margin-top: 10px;
  }

  img{
    margin:0;
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
