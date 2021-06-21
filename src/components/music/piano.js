import React from 'react'
import Nav from '../nav'

function Piano(){

    // function Houndstooth() {
    //     const audio = new Audio(Pickle)
    //     audio.play()
    // }

    return(
        <div>
            <Nav />
            <h1>Piano music here</h1>
            <audio src="https://drive.google.com/uc?export=download&id=1gGGm_6rsGhnc2nTeoZn6QhWjb6drC95Z" controls autoPlay/>
        </div>
    )
}

export default Piano