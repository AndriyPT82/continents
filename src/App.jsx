import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core'

import { getData } from './api/getData'
import { Continents } from './components/Continents';
import './App.scss';

const query = `{
  continents {
    name
    code
  }
}`


function App() {

  const [continents, setContinents] = useState([]);

  useEffect(() => {
    getData(query)
      .then(res => setContinents(res.continents))
  }, [])

  return (

    <div className="App">
      {
        !continents.length
          ? <CircularProgress />
          : < Continents continents={continents} />
      }
    </div>

  );
}

export default App;
