import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  const [characters, setCharacters] = useState([])

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
      setCharacters(res.data)
      }).catch(err => console.error(err))
   }, [])

   useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
      setPlanets(res.data)
      }).catch(err => console.error(err))
   }, [])
   
  // ❗ Create effects to fetch the data and put it in state

  for (let i = 0; i < planets.length; i++) {
    const planetID = planets[i].id
    const planetName = planets[i].name
    for (let i = 0; i < characters.length; i++) {
     if (characters[i].homeworld === planetID) {
        characters[i].homeworld = planetName
        // console.log(`character ID ${characters[i].homeworld} == ${planetID}`)
     }
     
    }
 }
 console.log(characters)

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      { characters.map(char => {
        return <Character name = {char.name} homeworld = {char.homeworld} key={char.id}/>
      })
      /* <div class="character-card">
        <h3 class='character-name'>{character.name}</h3>
      </div> */}
      {/*
      ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
