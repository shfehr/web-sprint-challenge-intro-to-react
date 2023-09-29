import React, {useState} from 'react'
import { __PRIVATE__ } from 'styled-components'


function Character(props) { 

const { name, homeworld } = props
  console.log(homeworld)
  const[toggle, setToggle] = useState(false)
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
 
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
     <div onClick = {() => setToggle(!toggle)} className ='character-card'>
        <h3 className = 'character-name'>{name}</h3>
        { toggle && 
          <p>Planet: 
          <span className='character-planet'>{homeworld}</span> 
          </p>   
        }
    
        
      </div> 
  )
}

export default Character
