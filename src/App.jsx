import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Formulario/>
    </div>
  )
}

export default App
