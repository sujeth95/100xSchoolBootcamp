import Header from "./Header";

function App() {
  return (
    <div>
    <h1>First Component {sum()}</h1>
    <Fruits />
    <Colors />
    </div>
  )
}


const Fruits = () => {    //Learning to make and use component 
  return (
    <h1>Apple</h1>
  )
}

// NOTE: While creating components always use first letter as capital while naming a component
const Colors = () => {
  return (
    <h1>Red Color</h1>
  )
}

const sum = () => {
  return 10 + 10
}

export default App;
