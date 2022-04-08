import { useReducer,useRef } from "react";
import reducer , {initState} from './reducer';
import {setJob,addJob,deleteJob} from './action'
import logger from './logger';
function Content() {
    var xx=useRef(0)
    function getIntitialState(){
        const x=localStorage.getItem('jobs')
        if (x)
        return  JSON.parse(x);
        return []
    }
    const [state, dispatch] = useReducer(logger(reducer,xx), initState);
    var { job, jobs } = state;
    jobs=getIntitialState()
    const inputRef=useRef()
    function handleAddClick() {
        dispatch(addJob(job));
        dispatch(setJob(''))
        inputRef.current.focus();
        localStorage.setItem('jobs', JSON.stringify([...jobs,job]));

    }
    const handleDeleteClick = (index) => {
        dispatch(deleteJob(index));
        jobs.splice(index, 1);
        localStorage.setItem('jobs', JSON.stringify([...jobs]));
    }
    return (
        <div>
            <h3>Todo</h3>
            <input type="text"
                ref={inputRef}
                value={job}
                placeholder="Enter Job..."
                onChange={e => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button
                onClick={handleAddClick}
            >Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            onClick={()=>handleDeleteClick(index)}>&times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;