import React from 'react'
import '../styles.css'
import Header from './header'
// import Header from './components/header'
import Blurb from './blurb'
import Contact from './contact'

function Home() {
  return (
    <div id="home">
      <Header />
      <Blurb />
      <Contact />
    </div>
  )
}

export default Home