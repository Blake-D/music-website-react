import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div>
            <Link to="/bio">Bio</Link>{' | '}
            <Link to="/philosophy">Philosophy</Link>{' | '}
            <Link to="/collab">Collaborate</Link>{' | '}
            <Link to="/music">Music</Link>
        </div>
    )
}

export default Nav