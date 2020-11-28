import React from 'react';
import { Feed } from '../components/feed';
import PageHeader from './partials/PageHeader';

export default function EpisodesPage() {
  const title = 'Выпуски'
  return (
    <div className="content">
      <PageHeader title={title} />

      <Feed />
    </div>
  );
}

