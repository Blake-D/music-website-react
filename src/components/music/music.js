import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav'

function Music(){
    return(
        <div>
            <Nav />
            <Link to="/music/piano">Piano</Link><br></br>
            <Link to="/music/strings">Strings</Link><br></br>
            <Link to="/music/vocal">Vocal</Link><br></br>
            <Link to="/music/electronic">Electronic</Link><br></br>
            <Link to="/music/chamber-misc">Chamber/Misc</Link>
        </div>
    )
}

export default Music