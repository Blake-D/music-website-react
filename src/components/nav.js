import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div id="nav">
            <Link to="/about">About</Link>{' | '}
            <Link to="/music">Music</Link>{' | '}
            <Link to="/collab">Collaborate</Link>
        </div>
    )
}

export default Nav