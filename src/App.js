import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'
import Home from './components/home/home'
import Bio from './components/bio'
import Recordings from './components/recordings'
import Scores from './components/scores'
import Collab from './components/collab'
import Philosophy from './components/philosophy'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={Home}/>
        <Route exact path="/bio" render={Bio}/>
        <Route exact path="/recordings" render={Recordings}/>
        <Route exact path="/scores" render={Scores}/>
        <Route exact path="/collab" render={Collab}/>
        <Route exact path="/philosophy" render={Philosophy}/>
      </div>
    </Router>
  )
}

export default App