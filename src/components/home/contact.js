import React from 'react'

function Contact(){
    return(
        <div id="contact">
            <h1>Contact</h1>
            <p> - </p>
            <p>Right here will be a blurb about why should get in contact with me, ie to obtain scores, pitch an idea for a live performance, or join my ensemble in future performances.</p>
            <form>
                <label>Name</label><br></br><br></br>
                <input type="text" placeholder="first"></input><input type="text" placeholder="last"></input><br></br><br></br>
                <label>Email Address</label><br></br><br></br>
                <input type="text"></input><br></br><br></br>
                <label>Subject</label><br></br><br></br>
                <input type="text"></input><br></br><br></br>
                <label>Message</label><br></br><br></br>
                <textarea></textarea><br></br><br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Contact