import React from 'react';
import {Card} from '../card/card.jsx'
import './card-list.css';

// props comes from param of functional component
export const CardList = props => (
  <div className='card-list'>
  {props.monsters.map(monster => (
    <Card key={monster.id} monster={monster} />
  ))}
  </div>
);
