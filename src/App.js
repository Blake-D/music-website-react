import React, { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import test1 from './components/test1'
import test2 from './components/test2'
import test3 from './components/test3'
import test4 from './components/test4'

function App() {
  return (
    <div>
      <div>
        <Router>
          <Link to="/test1">test1</Link>
          <Link to="/test2">test2</Link>
          <Link to="/test1">test3</Link>
          <Link to="/test4">test4</Link>
          <Route path="/test1" component={test1}/>
          <Route path="/test2" component={test2}/>
          <Route path="/test3" component={test3}/>
          <Route path="/test4" component={test4}/>
        </Router>
      </div>
    </div>
  )
}

export default App