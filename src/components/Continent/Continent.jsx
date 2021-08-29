import React, { useEffect, useState } from 'react';
import { getData } from '../../api/getData';
import { Button } from '@material-ui/core';

import { CallBackContext } from '../../context/CallBackContext';
import { Countries } from '../Countries'
import './Continent.scss';

const continentsImg = {
  'AF': 'https://as2.ftcdn.net/v2/jpg/01/03/36/49/500_F_103364923_xKadTawDtQ4XBypC6AjSOd5IQ60kc9CQ.jpg',
  'AN': 'https://as2.ftcdn.net/v2/jpg/01/07/22/57/500_F_107225728_2CLn6bpSdCTWBiLBqDB2PekXKwGLC8T5.jpg',
  'AS': 'https://as2.ftcdn.net/v2/jpg/04/38/47/55/1000_F_438475549_DadnFuLiurMS9LfuTG3wNi1X3G4sWk8Z.jpg',
  'EU': 'https://as2.ftcdn.net/v2/jpg/02/86/18/45/1000_F_286184589_lMUVnqhSyHrvR5Fp8gT4Vqvh7e1cXPp9.jpg',
  'NA': 'https://as2.ftcdn.net/v2/jpg/01/16/62/75/1000_F_116627586_u4vfyHCcUXxZQyUZRSugAx5WMM30Mdx6.jpg',
  'OC': 'https://as1.ftcdn.net/v2/jpg/01/63/85/82/1000_F_163858284_HTDlPQicqczs4rgVdWOtp8V93Hz9JbCR.jpg',
  'SA': 'https://as2.ftcdn.net/v2/jpg/01/17/30/31/1000_F_117303146_eWf3IDzvo3jL7dUMCF5ivAcf459YyrUT.jpg',
}

export const Continent = ({ name, code }) => {

  const [countries, setCountries] = useState([])
  const [fetchCountries, setFetchCountries] = useState(false);


  useEffect(() => {
    if (fetchCountries) {
      const query = `{
        continents (filter: { code: { eq: "${code}" } }) {
          countries {
            name
            code
            capital
            languages {
              name
            }
          }
        }
      }`
      getData(query)
        .then(res => {
          setCountries(res.continents[0].countries)
        })
    } else {
      setCountries([])
    }
  }, [fetchCountries])

  return (
    <>
      <div className="card">
        <div className="card__info">
          <img className="card__logo" src={continentsImg[code]} alt={name} />
          <h2 className="card__name">{name}</h2>
        </div>
        <Button
          variant="outlined"
          className="card__button"
          onClick={() => setFetchCountries(!fetchCountries)}
        >
          {!countries.length ? 'Show Countries' : 'Hide Countries'}
        </Button>

      </div>
      <div className="list">
        {
          !!countries.length && (
            <CallBackContext.Provider value={{setCountries, setFetchCountries}}>
              <Countries countries={countries} />
            </CallBackContext.Provider>
          )

        }
      </div>
    </>
  )
}