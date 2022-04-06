import {useState,useRef,useEffect} from 'react'
// function Content() {
//     const [count, setCount] = useState(60);
//     let timerId = useRef(99);
//     console.log("timeID: ", timerId.current);
//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             setCount((prevCount) => prevCount - 1);
//         }, 1000);
//         console.log("Start -> IdInterval: ", timerId.current);
//     };
//     const handleStop = () => {
//         clearInterval(timerId.current);
//         console.log("Stop -> IdInterval",  timerId.current);
//     };

//     return (
//         <div style={{ padding: 20 }}>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     );
// }

function Content() {
    const [inputValue, setInputValue] = useState("c");
    const previousInputValue = useRef("99");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
}
export default Content;
