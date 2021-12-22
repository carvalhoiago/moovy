import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { useState } from "react";
import { OMDBapi } from "../../services/api";

export const SearchBar = (props) => {

  const [title, setTitle] = useState('')

  const searchMovies = (e) => {
    e.preventDefault();
    if (title !== ''){
      OMDBapi.get('?apikey=5e1d897b&s='+title)
      .then((response)=>{
        if(response.data.Response === "True"){
          props.setState(response.data.Search)
        } else{
          props.setState([])
        }
      })
    } else {
      props.setState([]);
    }
  }

  return(
    <Container>
      <form onSubmit={searchMovies}>
        <div className='form-content' >
          <input type="text" placeholder="Search.." onChange={e => setTitle(e.target.value)}/>
          <button type="submit"><FiSearch className='icon'/></button>
        </div>
      </form>
    </Container>
  );
};