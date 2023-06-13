import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RatingSystem from './components/Ratings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RatingSystem />
    </div>
  )
}

export default App
