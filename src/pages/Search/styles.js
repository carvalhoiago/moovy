import styled from 'styled-components';

export const Container = styled.section`
  .search-box{
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
  }

  .content{
    margin: auto;
    margin-top: 4rem;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    *{
      margin-bottom: 10px; 
    }
  }
`;