import React from 'react';
import mordy from '../../../images/mordy.png';
import './ShowmakersFaces.css';

export function ShowmakersFaces() {
  return (
    <div className="mordy">
      {<img src={mordy} alt="Морды" />}
      <div className="line" />
    </div>
  )
}
