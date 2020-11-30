import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState([{}]);
  
  useEffect(() => {
    async function getAPI() {
      const api = await fetch("https://api.github.com/users/muhammadmohsin/repos");
      const json = await api.json();
      console.log(json);
      setdata(json);
    }
    getAPI();
  }, [])

  return (
    <div>
      <h1>API call</h1>
      <p>getting list from remote repository through api</p>
      <ul>
        {data.map((dataObj, ind) => {
          return (<li key={ind}>{dataObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
