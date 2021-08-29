import React from 'react';
import { Country } from '../Country';

import './Countries.scss'


export const Countries = ({ countries }) => {

  return (
    <ul className="list">
      {
        countries.map(country => (
          <li key={country.code}>
            <Country {...country} />
          </li>
        ))
      }
    </ul>
  )
}