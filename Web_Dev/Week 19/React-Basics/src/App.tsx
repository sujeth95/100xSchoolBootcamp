import axios from "axios";
import { useState, useEffect } from "react";

// NOTE: React only re-renders components if a "state variable" changes.
function App() {
  let [data, setData] = useState([]);

  // if the dependency array (2nd argument) is empty
  // this function only runs on the first render (mount)
  useEffect(function () {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        setData(response.data);
      })
  }, []);

  // axios.get("https://jsonplaceholder.typicode.com/todos")
  //   .then(response => {
  //     setData(response.data);    //Changing a state variable.
  //     // data = response.data;   //Changing a local variable.
  //   })

  return <div>
    {data.map(todo => <Todo title={todo.title} />)}   //Converting array of objects into array of components
  </div>
}


// components 
// NOTE: functions takes arguments as an input
// components takes (props => Props is nothing but an object) as an input
function Todo(props: any) {

  return <div style={{ margin: 10, padding: 20, border: "1px solid black", borderRadius: 10, backgroundColor: props.backgroundColor }}>
    <div>
      {props.title}
    </div>
  </div>
}

export default App