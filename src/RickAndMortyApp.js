import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';

import { randomLocation } from './utils/randomLocation';
import './App.css';
import Header from './components/Header';

const RickAndMortyApp = () => {
  const [location, setLocation] = useState( randomLocation() );

  return (
    <div className="App-header">
      <Header />
      <SearchBox setLocation={ setLocation } />
      <LocationContainer location={ location } />
    </div>
  )
}

export default RickAndMortyApp;
