import { useState } from "react";

function App() {
    function getStoreJobs() {
        return JSON.parse(localStorage.getItem('jobs'))
    }
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(getStoreJobs() || [])
    function handleAdd() {
        setJobs(prevList => {
            localStorage.setItem('jobs', JSON.stringify([...prevList, job]));
            return [...prevList, job]
        })
        setJob('')

    }
    return (
        <div style={{ padding: 32 }}>
            <div>
                <input type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                >Add</button>
            </div>
            <div>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default App;
