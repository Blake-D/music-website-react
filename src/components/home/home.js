import React from 'react'
import Header from './header'
import Blurb from './blurb'
import Contact from './contact'
import SongOfWeek from './songofweek'
import Nav from '../nav'

function Home() {
  return (
    <div id="home">
      <Nav />
      <Header />
      <Blurb />
      <SongOfWeek />
      <Contact />
    </div>
  )
}

export default Home