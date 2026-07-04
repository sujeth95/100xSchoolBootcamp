
function App() {

  return <div>
    <LinkedinPost backgroundColor={"red"} name={"Sujeet"} contents={"This is me!"}/>
    <LinkedinPost backgroundColor={"green"} name={"Oraon"} contents={"Hii there!"}/>
    <LinkedinPost backgroundColor={"orange"}/>
    <LinkedinPost />
  </div>
}


// components 
// NOTE: functions takes arguments as an input
// components takes (props => Props is nothing but an object) as an input
function LinkedinPost(props: any) {

  return <div style={{margin: 10, padding: 20, border: "1px solid black", borderRadius: 10, backgroundColor: props.backgroundColor }}>
    <div>
      <b>{props.name}</b>
    </div>
    <div>
      {props.contents}
    </div>

  </div>
}

export default App