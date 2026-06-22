import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <div style={{ height: "100vh", background: "#dfe6e9" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponents />
            <br></br>
          </div>
          <div>
            <PostComponents />
            <br></br>
          </div>
          <div>
            <PostComponents />
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

// structing your app into components
// defining a state of your application

const style = { width: 300, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 30 }

function PostComponents() {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg"} style={{
        width: 50,
        height: 50,
        borderRadius: 50
      }} />
      <div style={{ fontSize: 15, marginLeft: 15 }}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style={{ fontSize: 18 }}>
      What to know how to win big? Check out how these folks won $6000 in bounties.
    </div>
  </div>
}

export default App
