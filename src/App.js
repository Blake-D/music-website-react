import React from 'react'
import './styles.css'
import Pic from './images/home_pic.jpg'
// import Header from './components/header'

function App() {
  return (
    <div className="parallax">
      <div className="parallax__group">
        <div className="parallax__layer parallax__layer--back">
          back
        </div>
        <div className="parallax__layer parallax__layer--base">
          base
        </div>
      </div>
      <div className="parallax__group">
        testing
      </div>
    </div>
  )
}

export default App