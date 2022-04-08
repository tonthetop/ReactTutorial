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



import { useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
   const calculation = useMemo(() => expensiveCalculation(count), [count]);
  //const calculation = expensiveCalculation(count);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};


export default App;
