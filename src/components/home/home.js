import React from 'react'
import Header from './header'
import Blurb from './blurb'
import Contact from './contact'
import SongOfWeek from './songofweek'

function Home() {
  return (
    <div id="home">
      <Header />
      <Blurb />
      <SongOfWeek />
      <Contact />
    </div>
  )
}

export default Home