import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Navbar from "./navbar"
import data from "./data"

function App() {
  const cards = data.map(item => (
    <Card 
    key={item.id}
    item={item} />
  ))
  const [image, setImage] = useState("")
  function doThis(){
    const rand = Math.floor(Math.random() * data.length)
    setImage(data[rand].image)
  }
  return (
    <>
    <Navbar />
    <div className='try'>{cards}</div>
    <button onClick={doThis}>click</button>
    <img src={image} width="200px" height="250px" />
    </>
    
  )
}

export default App
