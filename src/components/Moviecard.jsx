import React from 'react'
import Thumbs from './Thumbs'

const Moviecard = () => {

const key = process.env.REACT_APP_Key    
const loadContainer = () => {
        fetch(`http://www.omdbapi.com/?apikey=${key}&s=spiderman`)
          .then((r) => r.json())
          .then((resp) => {
              console.log(resp)
          });
      };


      loadContainer()
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
