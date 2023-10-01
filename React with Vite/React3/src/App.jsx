import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "sheel",
    age: 21
  }

  return (
    <>
      <h1>Tailwind Test</h1>
      <Card username="sheel ka channel"/>
    </>
  )
}

export default App
