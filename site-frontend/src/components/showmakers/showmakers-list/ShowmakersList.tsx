import React from 'react';

import { SHOWMAKERS } from '../../../collections/SHOWMAKERS';

function ShowmakersList() {
  const ListItems = SHOWMAKERS.map((showmaker: string, idx: number) => {
    return <li key={idx}>{showmaker}</li>
  });

  return (
    <ul>
      {ListItems}
    </ul>
  );
}

export default ShowmakersList;
