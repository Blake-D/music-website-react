import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'
import Home from './components/home/home'
import Bio from './components/bio'
import Music from './components/music/music'
import Recordings from './components/music/recordings'
import Scores from './components/music/scores'
import Collab from './components/collab'
import Philosophy from './components/philosophy'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={Home}/>
        <Route exact path="/bio" render={Bio}/>
        <Route exact path="/music" render={Music}/>
        <Route exact path="/music/recordings" render={Recordings}/>
        <Route exact path="/music/scores" render={Scores}/>
        <Route exact path="/collab" render={Collab}/>
        <Route exact path="/philosophy" render={Philosophy}/>
      </div>
    </Router>
  )
}

export default App