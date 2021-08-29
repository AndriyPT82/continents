import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'

import { Languages } from '../Languages'
import './Country.scss'


export const Country = ({ name, code, capital, languages }) => {

  const [showLanguages, setShowLanguages] = useState(false)


  return (
    <>
      <div className="card">
        <div className="card__info">
          <img
            className="card__logo"
            src={`https://www.countryflags.io/${code}/flat/64.png`}
            alt={name}
          />
          <div className="card__info">
            <h2>{name}</h2>
          </div>
        </div>
        <Button
          variant="outlined"
          className="card__button"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          {!showLanguages ? 'Show Language' : 'Hide Language'}
        </Button>

      </div>
      <div className="list">
        {!!showLanguages && <Languages languages={languages} />}
      </div>
    </>
  )
}