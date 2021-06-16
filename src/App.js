import React from 'react'
import './styles.css'
import Header from './components/header'
import Blurb from './components/blurb'
import Contact from './components/contact'

function App() {
  return (
    <div id="header">
      <Header />
      <Blurb />
      <Contact />
    </div>
  )
}

export default App