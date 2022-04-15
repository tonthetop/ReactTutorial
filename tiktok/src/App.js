import { useState,  } from 'react'
import Content from './router/Decendant'
function App() {
  const [toggled, setToggled] = useState(true);
  return (
    <div style={{padding: '20px'}}>
      <button  onClick={() => setToggled(!toggled)}>Toggle</button>
      {toggled && <Content></Content>}
    </div>
  );
}
export default App