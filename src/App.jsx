import axios from 'axios';
import React, { useEffect, useState } from 'react';

// api url https://pokeapi.co/api/v2/pokemon/ditto

import './App.css';

function App() {

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(res => {
      const data = res.data;
      console.log("data", data)
   
    })
  })


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
