import React, {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('https://6480c8bdfa84142557190fa0--regal-sprite-15c933.netlify.app/').then(
      response => response.json()
    ).then(data => {
      setBackendData(data);
    });
  }, []);

  return (
    <div className="App">
      <p>{JSON.stringify(backendData)}</p>
      
    </div>
  );
}

export default App;