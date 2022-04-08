import { useEffect, useState } from "react";
function Content() {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = title;
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  //cleanup-function
  return ()=>{
    window.removeEventListener("resize", () => setWidth(window.innerWidth));
  };
  },[]);
  return (
    <div>
      <h1>Length Window: {width}</h1>

    </div>
  );
}

export default Content;
