"use client";
import React, { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);


  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask);
  }
  let renderTask = <h2>No task Available</h2>
  if (mainTask.length > 0) {
    
    renderTask = mainTask.map((t, i)=>{
      return (
        <div className="task" key={i}> 

        <div className="task-details">
         <table >
        <tr> <td><h5>{t.title}</h5></td></tr> 
        <tr><td><h6>{t.desc}</h6></td></tr>
         </table>
        </div>

        <div className="delete-button-container">
      <button className="delete-button" onClick={()=>{
        deleteHandler(i)
      }}>Delete</button>
      </div>
      
      </div>)
      
    })
  }
  return (
    <>
      <div className="main">
        <h1>TODO</h1>
        <form onSubmit={submitHandler}>
        <div className="input-box">
          
          <input
            type="text"
            placeholder="Add Todo"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Add Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="add-todo">Add Todo</button>
          
        </div>
        </form>
        
        <div className="tsk-container">
          <div className="tsk-r">
            {renderTask}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
