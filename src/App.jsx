
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [bgCng, setBgCng] = useState(false);

  const handleBgColor = () => {
    bgCng === true? '' : setBgCng(!bgCng);
  }

  return (
    <>
      <Header handleBgColor={handleBgColor}></Header>
      <h1 className={` md:text-white font-bold text-3xl text-center
      ${bgCng? 'bg-fuchsia-500' : 'bg-green-900'}`}>This is header</h1>
    </>
  )
}

export default App
