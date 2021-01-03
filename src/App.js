import React, {useState} from 'react'
import Banner from './components/Banner'
import Search from './components/Search'
import Container from './components/Container'
import "./app.css"

function App() {
    return (
        <div>
          <Banner/>
          <Search/>
          <Container/>
        </div>
    )
}

export default App
