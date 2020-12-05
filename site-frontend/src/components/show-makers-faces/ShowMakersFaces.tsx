import React from 'react';
import mordy from '../../images/mordy.png';
import './ShowMakersFaces.css';

export function ShowMakersFaces() {
  return (
    <div className="mordy">
      {<img src={mordy} alt="Морды" />}
      <div className="line" />
    </div>
  )
}
