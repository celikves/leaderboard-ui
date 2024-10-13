import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import GridExample from './Grid'
import './index.css'
import Leaderboard from './Leaderboard'
import panteonLogo from './assets/panteon.png'
import Header from './Header'

function App() {

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="">
        <Header />
        <Leaderboard />
      </div>
    </div>
  )
}

export default App
