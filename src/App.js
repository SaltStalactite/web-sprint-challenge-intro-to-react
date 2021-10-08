import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled, { keyframes } from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [charactersData, setCharactersData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharactersData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        console.log('api call made')
      })
  }, [])

  const kf = keyframes`
  50% {
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

  const StyledApp = styled.div`
  text-align: center;
  font-family: 'Courier New', monospace;

  transform: scale(2); //-> start of animation
  opacity: 0; //-> start of animation
  animation: ${kf} 0.4s ease-in-out forwards;
`

  return (
    <StyledApp>
      <h1 className="Header">Galactic Database</h1>
      {charactersData.map((data) => {
        return <Character data={data} key={data.created} />
      })}
    </StyledApp>
  );
}

export default App;
