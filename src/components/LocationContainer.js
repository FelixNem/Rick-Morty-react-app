import React from 'react';
import useFetch from '../hook/useFetch';
import LocationInfo from './LocationInfo';
import ResidentsContainer from './ResidentsContainer';

import '../style/LocationContainerStyle.css';

const LocationContainer = ({location}) => {

  const { data, loading }= useFetch(`https://rickandmortyapi.com/api/location/${location}`);


  console.log(data);
  return (
    <div className='locationContainer' >
      { loading?
        <h2>loading...</h2>
      :
        <>
          <LocationInfo
            name={ data.name }
            type={ data.type }
            dimension={ data.dimension }
            cantResidents={ data.residents.length }
          />
          <ResidentsContainer residents={ data.residents } />
        </>
      }
    </div>
  )
}

export default LocationContainer;
