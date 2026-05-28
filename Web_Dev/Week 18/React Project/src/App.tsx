// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css' 

function App() {  /* App component is the first component to render */

  return (
    <div>
      <h1>Linked!!</h1>
      <Post name="Sujeet" content="Today is my birthday" />
      <Post name="Harkirat" content="I have launched a new course" />
      <Post name="Neha" content="This is me posting my vlog" />
    </div>
  )
}

function Post(props: any) {   /* Each component takes only one argument*/
  return (
    <div style={{ margin: 20, borderRadius: 20, padding: 20, fontSize: 20, border: "2px solid black" }}>
      <div>
        <b>{props.name}</b>
      </div>
      <div>
        {props.content}
      </div>
    </div>
  )
}

export default App
