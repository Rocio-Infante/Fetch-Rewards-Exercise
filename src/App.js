import React, { useState, useEffect } from 'react';
import dataApi from './data/dataApi';


const App = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

  useEffect( () => {
    setLoading(true)
    fetch('/hiring.json')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData)
        setLoading(false)
        console.log("response", responseData[0].id)
      })
      .catch(e => {
        setLoading(false);
        setError('Fetch failed');
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }

  return (
    <div>

    </div>
  )
};

export default App;