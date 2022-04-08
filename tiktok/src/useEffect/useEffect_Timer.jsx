import { useEffect, useState } from "react";
function Content() {
  const [countdown, setCountdown] = useState(180);
  // useEffect(() => {
  //   const timer=setInterval(()=>setCountdown(prev=>prev-1)  , 1000);
  //   // Cleanup
  //   return ()=>clearInterval(timer);
  // },[]);

  useEffect(() => {
    const timer=setTimeout(()=>setCountdown(prev=>prev-1), 1000);

    return ()=>clearTimeout(timer);
  },[countdown]);

  
  return (
    <div>
      <h1>countdown: {countdown}</h1>
    </div>
  );
}

export default Content;
