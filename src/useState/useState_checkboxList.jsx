import { useState } from "react";
const course = [
  { id: "1", name: "tuandeptrai1" },
  { id: "2", name: "tuandeptrai2" },
  { id: "3", name: "tuandeptrai3" },
];
function App() {
  const [listId, setItem] = useState([]);
 function  handleCheck(id){

    setItem(prevList=>{
        if (prevList.includes(id)){
            return prevList.filter(e=>e!=id)
        }
        else return [...prevList,id]
        }
    )
    }

    function handleSubmit(){
        console.log(listId)
    }
  return (
    <div style={{ padding: 32 }}>
      {course.map((item, i) => (
        <div key={item.id}>
          <input type="checkbox" 
          checked={listId.includes(item.id)}
          onChange={()=>handleCheck(item.id)}/>
          {item.name}
        </div>
      ))}
      <div>
          <button
          onClick={handleSubmit}
          >Submit</button>
      </div>
    </div>
  );
}
export default App;
