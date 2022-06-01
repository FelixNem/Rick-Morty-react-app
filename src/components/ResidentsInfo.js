import React from 'react';

import '../style/ResidentsInfoCards.css'

const ResidentsInfo = ({name, img, status, species, type, LastLocation, catnEpisodes}) => {

  let statusClass = '';

  switch(status) {
    case 'Dead': statusClass = 'circleDead' 
      break;
    case 'Alive': statusClass = 'circleAlive' 
      break;
    default: statusClass = 'circleUnknow'
  }

  return (
    <div className='residentCard' >
      <div className='residentCardImg' >
        <img alt='Character from the location' src={img} />
      </div>
      <div className='residentCardInfo' >
        <div className='dataCharacter' >
          <h3>{name}</h3>
          <div className='statusRow' >
            <div className={`circleStatus ${statusClass}`} ></div>
            <p>{status}</p>
          </div>
        </div>
        <label className='labelInfo' >Especie:</label>
        <div className='row'>
          <p>{ species } { type &&
            `- ${ type }`
          } </p>
        </div>
        <label className='labelInfo'>Last known location: </label>
        <p>{ LastLocation }</p>
        <label className='labelInfo' >Appeared in: </label>
        <p>{catnEpisodes} { catnEpisodes > 1? 'episodes' : 'episode' }</p>
      </div>
    </div>
  )
}

export default ResidentsInfo;
