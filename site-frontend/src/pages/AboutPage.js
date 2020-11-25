import React from 'react';
import PageHeader from './partials/PageHeader';

export default function AboutPage() {
  const title = 'О подкасте';

  return (
    <div className="content">
      <PageHeader title={title} />

      <p>
        Подкаст о разработке и IT в целом. Развлекательно-познавательный
        контент.
      </p>
      <p>Постоянные ведущие:</p>
      
      <HeroesList />
    </div>
  );
}

function HeroesList() {
  const heros = [
    'Антон Околелов',
    'Никита Васильченко',
    'Олег Грицак',
  ]
  
  const getListItem = (hero, idx) => <li key={idx}>{hero}</li>

  return (
    <ul>
      {heros.map(getListItem) }
    </ul>
  )
}