import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import DigitalSolution from './components/DigitalSolution/DigitalSolution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
        <Header />
        <DigitalSolution />
    </div>
  )
}

export default App
