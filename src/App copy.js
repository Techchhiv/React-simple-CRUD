import logo from './logo.svg';
import './App.css';
import user from  './data.js';
import { useState } from 'react';
import {Register, Login} from './component/form.js';

// let loggedIn = false;
// let content;

// function MyButton({toggleButton}) {
//   return (
//     <button onClick={
//       toggleButton
//     }>I'm a button</button>
//   );
// }

// function AboutPage({toggleButton}){
//   const products = [
//     { title: 'Cabbage', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ];

//   const listItem = products.map(product=>
//     <li key={product.id}>
//       {product.title}
//     </li>
//   );

//   return (
//     <>
//       <h1 className='about'>About</h1>
//       <p>Hello There.<br/> This is an about page!</p>
//       {listItem}
//       <MyButton toggleButton={toggleButton}></MyButton>
//     </>
//   )
// }

// function Profile({toggleButton}){
//   return (
//     <>
//       <h1>
//         {user.name}
//       </h1>
//       <img src={user.imageUrl} style={{
//         width: user.imageSize,
//         height: user.imageSize,
//         borderRadius: 100
//       }} className='avatar'>
//       </img>
//       <MyButton toggleButton={toggleButton}></MyButton>
//     </>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default function App(){
//   return(
//     <div>
//       <h1>Hello World</h1>
//       <MyButton></MyButton>
//       <AboutPage></AboutPage>
//     </div>
//   )
// };

// export default function Conditional(){
//   const [loggedIn, setLoggedIn] = useState(false);

//   const toggleButton = ()=>{
//     setLoggedIn(!loggedIn);
//   }
//   return(
//     <>
//     {loggedIn ? (<Profile toggleButton={toggleButton}></Profile>) : (<AboutPage toggleButton={toggleButton}></AboutPage>)}
//     </>
//   )
// }

export default function Form(){
  return (
    <>

    </>
  )
};