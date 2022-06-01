import axios from 'axios';
import React, { useState } from 'react';

import '../style/SearchBoxStyle.css';

const SearchBox = ({ setLocation }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  const getSuggestions = async(location) => {

    const { data } =await axios.get(`https://rickandmortyapi.com/api/location/?name=${location}`)

    if( data.info.count > 5 ){
      return data.results.slice(0,5);
    }
    
    return data.results;
  }
  
  const handleInput = async(e)=> {
    
    setInputValue( e.target.value );
    setSuggestions(await getSuggestions( e.target.value ))
    console.log(suggestions)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    if( inputValue.length > 3  ){

      const { id } = suggestions.find( suggestion =>  inputValue=== suggestion.name )

      setLocation( id );
      setInputValue('');
    }
    
  }

  return(
    <form className='searchBoxStyle' onSubmit={ handleSubmit } >
      <input 
        type='text'
        value={ inputValue }
        onChange={ handleInput }
        list='locationSuggestions'
        className='inputStyle'
        placeholder='Search a Location'
        required
        minLength={2}
      />
      <datalist id='locationSuggestions' >
        { suggestions.length > 0 &&
          suggestions.map( (suggestion) => 
              <option key={ suggestion.id } value={ suggestion.name }  />
            )
        }
      </datalist>
      <button type='submit' className='searchBtn' >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
    </form>
  )
}

export default SearchBox;
