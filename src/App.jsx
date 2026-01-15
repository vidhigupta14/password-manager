import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div className='text-purple-400 text-2xl font-bold'>
        Hello world!!
      </div>
    </>
  )
}

export default App
