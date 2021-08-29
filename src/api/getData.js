export const getData = (query) => {
  return fetch(`https://countries.trevorblades.com/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  })
    .then(res => res.json())
    .then(res => res.data)
}


