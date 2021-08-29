import React from 'react';


import { Continent } from '../Continent';
import './Continents.scss'


export const Continents = ({ continents }) => {

  return (
    <div>
      <ul className="list">
        {
          continents.map(continent => (
            <li key={continent.code}>
              <Continent {...continent} />
            </li>
          ))
        }
      </ul>

    </div>
  )
}