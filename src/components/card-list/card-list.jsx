import React from 'react';
import './card-list.css';

// props comes from param of functional component
export const CardList = props => {
  return <div className='card-list'>{props.children}</div>
}
