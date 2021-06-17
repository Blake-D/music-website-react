import React from 'react'
import { Link } from 'react-router-dom'

function Music(){
    return(
        <div>
            <Link to="/music/recordings">Recordings</Link><br></br>
            <Link to="/music/scores">Scores</Link>
        </div>
    )
}

export default Music