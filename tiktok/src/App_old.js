import './App.css'
import { ThemeContext } from "./useContext/ThemeContext";
import { useContext, useState, useCallback } from 'react'
// const emitFakeComments=(id)=>{
//   setInterval(()=>{
//     window.dispatchEvent(new CustomEvent(`lesson-${id}`,{
//       detail: `noi dung cua lesson-${id}`
//     }))
//   }
//   ,2000)
// }

// emitFakeComments(1)
// emitFakeComments(2)
// emitFakeComments(3)

// function App() {
//   const [toggled, setToggled] = useState(false);
//   return (
//     <div style={{padding: '20px'}}>
//       <button  onClick={() => setToggled(!toggled)}>Toggle</button>
//       {toggled && <Content></Content>}
//     </div>
//   );
// }

// function App() {
//   const context = useContext(ThemeContext)
//   return (
//     <div style={{ padding: '20px' }}>
//       <button onClick={context.toggleTheme}>Toggle</button>
//       {<Content ></Content>}
//     </div>
//   );
// }


// import Content from "./useMemo/Content";
// function App() {
//   const [count, setCount] = useState(0)

//   const handleCount = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       {<Content onIncrement={handleCount} ></Content>}
//       <hr />
//       Count: {count}
//       <br />

//     </div>
//   );
// }