import React from 'react';
import mordy from '../../images/mordy.png';

export default function Heroes() {
  return (
    <div className="mordy">
      {<img src={mordy} alt="Морды" />}
      <div className="line" />
    </div>
  )
}
