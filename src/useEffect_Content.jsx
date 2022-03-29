import { useEffect, useState } from "react";
function Content() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [link, setLink] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${link}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [link]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = title;
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  //cleanup-function
  return ()=>{
    window.removeEventListener("resize", () => setWidth(window.innerWidth));
  };
  },[]);
  const subject = ["posts", "comments", "albums"];
  return (
    <div>
      <h1>Length Window: {width}</h1>
      <div>
        {subject.map((item) => (
          <button
            key={item}
            style={
              item === link
                ? { backgroundColor: "black", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
            onClick={() => setLink(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ol>
        {data.map((dataItem, index) => (
          <li key={index}>{dataItem.title || dataItem.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Content;
