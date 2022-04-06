import {useState,useEffect,useLayoutEffect,useRef} from 'react'
function Content(){
    const [count,setCount]=useState(0)
    const [countRender,setCountRender]=useState(0)
    const dem=useRef(0)
    const handleCount=()=>{
        setCount(count+1)
        setCountRender(countRender+1)
        dem.current++;

    }
 
    console.log('rendered: ',dem.current)
    useEffect(()=>{
        if (count>3) setCount(0)
        
    })
    return (
        <div>
            <h1>
                {count}
            </h1>
            <h2>{'Rendered: '+ countRender +'times'}</h2>
            <button
            onClick={handleCount}>
            Up
            </button>
        </div>
    )
}
export default Content