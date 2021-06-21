import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'
import Home from './components/home/home'
import About from './components/about'
import Collab from './components/collab'
import Music from './components/music/music'
import Piano from './components/music/piano'
import Strings from './components/music/strings'
import Vocal from './components/music/vocal'
import Electronic from './components/music/electronic'
import ChamberMisc from './components/music/chamber-misc'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={Home}/>
        <Route exact path="/about" render={About}/>
        <Route exact path="/collab" render={Collab}/>
        <Route exact path="/music" render={Music}/>
        <Route exact path="/music/piano" render={Piano}/>
        <Route exact path="/music/Strings" render={Strings}/>
        <Route exact path="/music/vocal" render={Vocal}/>
        <Route exact path="/music/electronic" render={Electronic}/>
        <Route exact path="/music/chamber-misc" render={ChamberMisc}/>
      </Router>
    </div>
  )
}

export default App