import React from 'react'
import './styles.css'
import Pic from './images/home_pic.jpg'
import Header from './components/header'

function App() {
  return (
    <div id="header">
      <h1>Parallax Effect</h1>
      <p>Pure CSS // No JavaScript !</p>
    </div>
    // <div className="parallax">
    //   <div className="parallax__group">
    //     <div className="parallax__layer parallax__layer--back">
          
    //     </div>
    //     <div className="parallax__layer parallax__layer--base">
    //       <Header />
    //     </div>
    //   </div>
    //   <div className="parallax__group">
    //     testing
    //   </div>
    // </div>
  )
}

export default App