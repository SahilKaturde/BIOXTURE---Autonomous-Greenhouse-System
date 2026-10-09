import { useState } from 'react'
import './App.css'
import Landing_Page from './pages/Landing_Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Landing_Page/>
    </div>
  )
}

export default App
