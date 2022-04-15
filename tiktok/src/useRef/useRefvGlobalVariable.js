import {useRef} from 'react'
//const ref={current:0}
export default function Content() {
    const ref = useRef(0);
  

    const onHandleClick=()=>{
      ref.current++
      console.log(ref.current)
    };
    console.log('render')
    return (
      <>
       <h1>Click to Increase</h1>
        <button 
        onClick={onHandleClick}>
          +
        </button>
      </>
    );
}