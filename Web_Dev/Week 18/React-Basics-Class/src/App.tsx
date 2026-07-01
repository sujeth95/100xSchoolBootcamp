function App() {

  const posts = [{
    name: "sujeet",
    content: "hi there"
  }, {
    name: "raman",
    content: "Hii I just moved to canada"
  }, {
    name: "raman",
    content: "Hii I must move to america"
  }
  ];

  let postsComponents = posts.map(p => <Post name={p.name} content={p.content} />)

  return (
    <div>
      <h1 style={{display: "flex", justifyContent:"center"}}>Linked!!</h1>
      {postsComponents}
    </div>
  )
}

// NOTE: Every component can take only one argument.
function Post(props: any) {
  return <div style={{ margin: 20, borderRadius: 20, fontSize: 20, border: "2px solid black", padding: 20 }}>
    <div>
      <b>{props.name}</b>
    </div>
    <div>
      {props.content}
    </div>
  </div>
}

export default App