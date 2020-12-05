import React, { useState, useEffect } from 'react';
import ItemCard from './components/ItemCard';


// ------------------------------ Main App Component  ------------------------------- //

const App = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

// Fetching data on page load

  useEffect( () => {
    setLoading(true)
    fetch('/hiring.json')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData)
        setLoading(false)
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

// Page render

  return (
    <div>
      <ItemCard data={data}/>
    </div>
  )
};

export default App;