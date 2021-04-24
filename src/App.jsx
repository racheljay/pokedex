import axios from 'axios';
import React, { useEffect, useState } from 'react';

// api url https://pokeapi.co/api/v2/pokemon/ditto
// https://pokeapi.co/api/v2/pokemon?limit=150

import './App.css';

function App() {

  useEffect(()=> {

    const data = []

    
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(res => {
        const data = res.data.results;
        console.log(data)
      })
    

    // console.log(data)

  },[])


  return (
    <div className="container">
  <h1>Pokedex</h1>
  </div>
  );
}

export default App;
