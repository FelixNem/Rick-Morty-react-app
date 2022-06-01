import React from 'react';

import '../style/LocationInfoStyle.css';

const LocationInfo = ({name, type, dimension, cantResidents}) => {
  return (
    <div className='infoCard' >
      <p><label className='labelLocation' >Name:</label> { name }</p>
      <p><label className='labelLocation' >Type:</label> { type }</p>
      <p><label className='labelLocation' >Dimension:</label> { dimension }</p>
      <p><label className='labelLocation' >Residents:</label> { cantResidents }</p>
    </div>
  )
}

export default LocationInfo;
