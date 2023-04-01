import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header'
import DigitalSolution from './components/DigitalSolution/DigitalSolution'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0);

  const showToastMessage = () => {
    toast.error("Don't add same item !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div className="App container">
      <Header />
      <DigitalSolution showToastMessage={showToastMessage} />
      <ToastContainer/>
      
    </div>
  )
}

export default App
