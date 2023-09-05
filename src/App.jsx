import { useState } from 'react'
import { thingsList } from './things';

function App() {
  const [things, setThings] = useState(thingsList);
  const [selectedThingId, setSelectedThingId] = useState(null);

  const selectedThing = things.find(thing => thing.id === selectedThingId);

  return (
    <>
      <h1>Hello World { selectedThingId }</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
                <button onClick={ ()=> setSelectedThingId(thing.id)}>Select</button>
              </li>
            );
          })
        }
      </ul>
      {
        selectedThing ? <h2>{ selectedThing.name }</h2> : null
      }
    </>
  )
}

export default App
