import React from 'react';
import { useQuery } from '@apollo/client';
import ConditionMenu from '../components/conditionMenu';

import './home.scss';

export default function Home() {
  return (
    <section className="home">
      <div className="container--title">
        <h1 className="title">Prime Toys</h1>
        <h2 className="subtitle">Trade or donate your toys here</h2>
        {/* <ConditionMenu /> */}
      </div>
    </section>
  );
}
