import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  return (
    <div style={{ height: "100vh", background: "#dfe6e9" }}>
      <ToggleMessage />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponents 
            name={"harkirat"}
            subtitle={"20 followers"}
            time={"2m ago"}
            image={"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg"}
            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
            />
            <br></br>
          </div>
          <div>
            <PostComponents 
            name={"raman"}
            subtitle={"Promoted"}
            image={"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg"}
            description={"How to get hired in 2026? I lost my job in 2025, this is the roadmap I followed to get a job"}
            />
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

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

function PostComponents({ name, subtitle, time, image, description }) {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={image} style={{
        width: 50,
        height: 50,
        borderRadius: 50
      }} />
      <div style={{ fontSize: 15, marginLeft: 15 }}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {/* Adding condition for time */}
        {(time !== undefined) ? <div style={{ display: "flex" }}>
          <div>{time}</div>
          <img src={"https://img.magnific.com/premium-vector/round-wall-clock-cartoon_119631-491.jpg?semt=ais_hybrid&w=740&q=80"} style={{ width: 20, height: 20, marginLeft: 5 }} />
        </div> : null}
      </div>
    </div>
    <div style={{ fontSize: 18 }}>
      {description}
    </div>
  </div>
}

export default App
