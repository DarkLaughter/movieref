import React from 'react'
import Thumbs from './Thumbs'

const Moviecard = () => {
    return (
        <div>
            <h1>Title</h1>
            <h2>Director</h2>
            <h3>Release Year</h3>
            {/* <h3>Description</h3> */}
            <Thumbs/>
        </div>
    )
}

export default Moviecard
