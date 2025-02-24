import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  
  useEffect(()=> {
    axios.get("/api/jokes")
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(`ERROR: ${error}`);
    })
  })

  return (
    <>
      <p>JOKES: {jokes}</p>
      
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.text}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
