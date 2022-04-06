import { useEffect, useLayoutEffect, useState } from "react";
function Content() {
  const [countup, setCountup] = useState(0);
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //     const timerId=(clicked)?setInterval(() => {
  //       setCountup((prev) => prev + 1);
  //     }, 500):0;
  //     console.log('callback After')
  
    
  //   return ()=>{
  //     console.log(timerId);
  //     clearInterval(timerId);}
  // }, [clicked]);

  useEffect(() => {
    const timerId=(clicked)?setTimeout(() => {
      setCountup((prev) => prev + 1);
    }, 500):0;

  
  return ()=>{
    console.log(timerId);
    clearTimeout(timerId);}
}, );

  function handleClick() {
    setClicked((prev) => !prev);
  }
  return (
    <div>
      <h1>countup: {countup}</h1>
      <button onClick={handleClick}>{!clicked ? "Go" : "Stop"}</button>
    </div>
  );
}

export default Content;
