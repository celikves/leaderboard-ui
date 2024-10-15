import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import GridExample from './Grid'
import './index.css'
import Leaderboard from './Leaderboard'
import panteonLogo from './assets/panteon.png'
import Header from './Header'
import Explanation from './Explanation'

function App() {

  return (
    <div className="w-full min-h-screen bg-black pb-2">
      <div className="">
        <Header />
        <Explanation />
        <Leaderboard />
      </div>
    </div>
  )
}

export default App
