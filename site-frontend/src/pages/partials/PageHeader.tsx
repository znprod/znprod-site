import React from 'react';

type PageHeaderProps = {
  title: string,
}

export default function PageHeader({title}: PageHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
