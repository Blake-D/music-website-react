import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles.css'
import Home from './components/home'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Home />}/>
      </div>
    </Router>
  )
}

export default App