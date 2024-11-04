import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-6xl'>
        click on the vite and React logos to learn more
      </p>
      <button className='btn'>Hl</button>
    </>
  )
}

export default App
