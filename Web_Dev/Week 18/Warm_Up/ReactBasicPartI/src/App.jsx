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
            <PostComponents 
            name={"harkirat"}
            sub
            />
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

function PostComponents({ name, followerCount, time, image, description }) {
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
        <div>200 followers</div>
        <div style={{ display: "flex" }}>
          <div>1 day ago</div>
          <img src={"https://img.magnific.com/premium-vector/round-wall-clock-cartoon_119631-491.jpg?semt=ais_hybrid&w=740&q=80"} style={{ width: 20, height: 20, marginLeft: 5 }} />
        </div>
        <div>{time}</div>
      </div>
    </div>
    <div style={{ fontSize: 18 }}>
      {description}
    </div>
  </div>
}

export default App
