import React, { useState } from "react";
import Tareas from "./tareas";

const Home = () => { 
    const [toDoTasks, setToDoTasks] = useState([]);
      const taskText = toDoTasks.length === 1 ? 'tarea' : 'tareas';
    return (
        <div className="container">
            <h1>TO DO LIST</h1>
            <Tareas toDoTasks = {toDoTasks} setToDoTasks = {setToDoTasks}/>
            <p className = 'contador'>Tengo {toDoTasks.length} {taskText} por realizar.</p>
        </div>
    );
};

export default Home; 

