import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentsInfo from './ResidentsInfo';

import '../style/ResidentsContainerGrid.css';
import NotResidentsComponents from './errors/NotResidentsComponents';

const ResidentsContainer = ({ residents }) => {

  const [residentsData, setResidentsData] = useState([])

    useEffect(() => {
      // eslint-disable-next-line
      residents.map( url => {
        axios.get(url)
          .then( ({data}) => setResidentsData((prevState) => [...prevState, data]));
        })
        return () => setResidentsData([]);
    }, [residents])

  return (
    <div className='residentsGrid' >
      {residentsData.length > 0 ?
        residentsData.map( ({ id, name, image, status, species, type, location, episode }) =>
          <ResidentsInfo
            key={ id }
            name={ name }
            img={ image }
            status={ status }
            species={ species }
            type={ type }
            LastLocation={ location.name }
            catnEpisodes={ episode.length }
          />
        )
      :
        <NotResidentsComponents />
      }
    </div>
  )
}

export default ResidentsContainer;
