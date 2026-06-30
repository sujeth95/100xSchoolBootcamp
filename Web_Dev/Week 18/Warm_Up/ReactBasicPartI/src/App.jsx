import { useState } from "react";
import { PostComponent } from "./Post";

const App = () => {
  return (
    <div>
      {[
        <Todo key={2} title={"Eat food"} done={false} />,
        <Todo key={1} title={"Go to gym"} done={false} />
      ]}
    </div>
  );
};


function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done!" : "Not done!"}
  </div>
}
// NOTE: Compare bottom and above of this for conceptual clarity.
// -----------------------------------------------------------------------------------------------------
// const App = () => {
//   const todos = [{
//     title: "Go to gym",
//     done: false
//   }, {
//     title: "Eat food",
//     done: true
//   }];
//   const todosComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

//   return (
//     <div>
//       {todosComponents}
//     </div>
//   );
// };

// function Todo({ title, done }){
//   return <div>
//     {title} - {done ? "Done!" : "Not done!"}
//   </div>
// }

// ---------------------------------------------------------------------
// const Card = ({children}) => {
//   return (
//     <div style={{
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       padding: '20px',
//       margin: '10px',
//       boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
//     }}>
//       {children}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Card>
//         <h2>Card Title</h2>
//         <p>This is some content inside the card.</p>
//       </Card>
//       <Card>
//         <h2>Another Card</h2>
//         <p>This card has different content!</p>
//       </Card>
//     </div>
//   );
// };

//--------------------------------------------------------------------------------------------------------------
// function App() {
//   const [showTimer, setShowTimer] = useState(true);

//   return <div style={{ display: "flex", background: "grey" }}>
//     <Card>
//       <div style={{ color: "green" }}>What do you want to post?<br /><input type={"text"} /></div>
//     </Card>
//     <Card>
//       <div>
//         hii there
//       </div>
//     </Card>
//   </div>
// }

// //Card where Outer structure is static and inside structure is dynamic.
// function Card({ children }) {
//   return <div style={{ background: "white", borderRadius: 10, color: "black", padding: 10, margin: 10 }}>
//     Upper topbar
//     {children}
//     Lower topbar
//   </div>
// }

// function App() {
//   return <div>
//     hii there
//     <Greeting name={"Sujeet"} />
//     <Greeting name={"Harkirat"} />
//   </div>
// }

// ----------------------------------------------------------------------------------------------------------------------

// function Greeting(props) {
//   return <div>
//     Hii there {props.name}
//   </div>
// }

// function App() {
//   const [count, setCount] = useState(1);

//   function increaseCount() {
//     setCount(count + 1);
//   }


//   return <div>
//     <div style={{ display: "flex" }}>
//       <div style={{ background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5 }}>
//         {count}
//       </div>
//     </div>
//     <img style={{cursor: "pointer"}} src={"https://www.citypng.com/public/uploads/preview/free-notifications-bell-outline-icon-png-701751694974381h7wblk6fpx.png"} width={40}/>
//     {/* <button onClick={increaseCount}>Increase the count</button> */}
//   </div>
// }

// function App() {
//   const [posts, setPosts] = useState([]);

//   const PostComponents = posts.map(post => <PostComponent 
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.title}
//     image={post.image}
//     description={post.description}
//   />)

//   function addPost() {
//     setPosts([...posts, {
//       name: "harkirat",
//       subtitle: "1000 followers",
//       image: "https://img.magnific.com/premium-vector/round-wall-clock-cartoon_119631-491.jpg?semt=ais_hybrid&w=740&q=80",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//     }])
//   }

//   return (
//     <div style={{background: "#dfe6e9", height: "150vh", }}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{display: "flex", justifyContent: "center" }}>
//         <div>
//           {PostComponents}
//         </div>
//       </div>
//     </div>
//   )
// }


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'


// function App() {

//   return (
//     <div style={{ height: "100vh", background: "#dfe6e9" }}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// // structing your app into components
// // defining a state of your application


// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0); //defining a new state variable
//   // const isVisible = true;

//   // NOTE: You should always change stateVariable as such -> setIsVisible(!isVisible);

//   // when the value of a state variable changes,
//   // the component that uses the state variables re-renders

//   // NOTE: The components with not re-render in react if we don't have a state variable.

//   console.log("re-render");
//   function increment() {
//       setNotificationCount(notificationCount + 1);
//   }

//   return (
//     <div>
//       <button onClick={(increment)}>
//         Increase Count
//       </button>
//       {notificationCount}
//     </div>
//   );
// };

// // const style = { width: 300, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 30 }

// // function PostComponents({ name, subtitle, time, image, description }) {
// //   return <div style={style}>
// //     <div style={{ display: "flex" }}>
// //       <img src={image} style={{
// //         width: 50,
// //         height: 50,
// //         borderRadius: 50
// //       }} />
// //       <div style={{ fontSize: 15, marginLeft: 15 }}>
// //         <b>
// //           {name}
// //         </b>
// //         <div>{subtitle}</div>
// //         {/* Adding condition for time */}
// //         {(time !== undefined) ? <div style={{ display: "flex" }}>
// //           <div>{time}</div>
// //           <img src={"https://img.magnific.com/premium-vector/round-wall-clock-cartoon_119631-491.jpg?semt=ais_hybrid&w=740&q=80"} style={{ width: 20, height: 20, marginLeft: 5 }} />
// //         </div> : null}
// //       </div>
// //     </div>
// //     <div style={{ fontSize: 18 }}>
// //       {description}
// //     </div>
// //   </div>
// // }


// {/* <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           <div>
//             <PostComponents 
//             name={"harkirat"}
//             subtitle={"20 followers"}
//             time={"2m ago"}
//             image={"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg"}
//             description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
//             />
//             <br></br>
//           </div>
//           <div>
//             <PostComponents 
//             name={"raman"}
//             subtitle={"Promoted"}
//             image={"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg"}
//             description={"How to get hired in 2026? I lost my job in 2025, this is the roadmap I followed to get a job"}
//             />
//             <br></br>
//           </div>
//         </div>
//       </div> */}

export default App
