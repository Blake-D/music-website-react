import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'
import Home from './components/home/home'
import Bio from './components/bio'
import Collab from './components/collab'
import Philosophy from './components/philosophy'
import Music from './components/music/music'
import Piano from './components/music/piano'
import Strings from './components/music/strings'
import Vocal from './components/music/vocal'
import Electronic from './components/music/electronic'
import ChamberMisc from './components/music/chamber-misc'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={Home}/>
        <Route exact path="/bio" render={Bio}/>
        <Route exact path="/collab" render={Collab}/>
        <Route exact path="/philosophy" render={Philosophy}/>
        <Route exact path="/music" render={Music}/>
        <Route exact path="/music/piano" render={Piano}/>
        <Route exact path="/music/Strings" render={Strings}/>
        <Route exact path="/music/vocal" render={Vocal}/>
        <Route exact path="/music/electronic" render={Electronic}/>
        <Route exact path="/music/chamber-misc" render={ChamberMisc}/>
      </div>
    </Router>
  )
}

export default App