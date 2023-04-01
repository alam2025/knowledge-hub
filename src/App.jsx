import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// smooth scrolling 
// import { Link, animateScroll as scroll } from "react-scroll";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header'
import DigitalSolution from './components/DigitalSolution/DigitalSolution'
import Blog from './components/Blog/Blog';



function App() {
  const [count, setCount] = useState(0);


  // toast message 
  const showToastMessage = () => {
    toast.error("Don't add same item !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  // jump destination 

  return (
    <div className="App container">
      {/* header  */}
      <Header/>
      {/* main  */}
      <DigitalSolution showToastMessage={showToastMessage} />
      {/* blog  */}
        <Blog />
      
  {/* toast messaeg  */}
      <ToastContainer />

    </div>
  )
}

export default App
