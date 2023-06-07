import React, {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:8080/api/cuestionario/1').then(
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