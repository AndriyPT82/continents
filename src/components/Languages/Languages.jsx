import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { CallBackContext } from '../../context/CallBackContext';

import { Language } from '../Language';


export const Languages = ({ languages }) => {

  const {setCountries, setFetchCountries} = useContext(CallBackContext)
  return (
    <div className="list">
      <div className="card card__language">
        {
          languages.map(lang => (
            <Language {...lang} />
          ))
        }
        <Button
          variant="outlined"
          className="card__button"
          onClick={() => {
            setCountries([])
            setFetchCountries(false)
          }}
        >
          CLOSE
        </Button>
      </div>

    </div>
  )
}