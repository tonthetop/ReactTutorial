import { useEffect, useState } from "react";
function Content() {
  const lessons = [{id: 1, name: 'React'}, {id: 2, name: 'JavaScript'}, {id: 3, name: 'Nodejs'}];
  const [lessonId,setLessonId] =useState(1);
  
  useEffect(() => {

    function handleListener(e){
      console.log(e.detail);
    }
    window.addEventListener(`lesson-${lessonId}`,handleListener);

    return ()=>{
      window.removeEventListener(`lesson-${lessonId}`,handleListener)
    }
  },[lessonId])

  return <div>
    <ul>
      {lessons.map(lesson =>(
        <li 
        key={lesson.id}
        style={lesson.id===lessonId?{color: 'red'}:{color:'black'}}
        onClick={() =>setLessonId(lesson.id)}
        >{lesson.name}</li>
      ))}
    </ul>
  </div>;
}

export default Content;
