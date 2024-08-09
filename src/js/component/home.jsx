import React, { useState } from "react"; // Importa la biblioteca de React para poder usar JSX y crear componentes.
import Tareas from "./tareas"; // Importa el componente Tareas desde el archivo tareas.jsx.

const Home = () => { // Define el componente Home como una función de flecha.
    const [toDoTasks, setToDoTasks] = useState([]);
      // Paso 1: Definir la lógica condicional para el plural
      const taskText = toDoTasks.length === 1 ? 'tarea' : 'tareas';
    return ( // Lo que esta función retorna es lo que se va a renderizar en la pantalla.
        <div className="container"> {/* Crea un div con la clase "container". Esto ayuda a estilizar el componente. */}
            <h1>TO DO LIST</h1> {/* Añade un encabezado h1 con el texto "TO DO LIST". */}
            <Tareas toDoTasks = {toDoTasks} setToDoTasks = {setToDoTasks}/> {/* Incluye el componente Tareas. Esto es como decirle a React "inserta el componente Tareas aquí". */}
            <p className = 'contador'>Tengo {toDoTasks.length} {taskText} por realizar.</p>
        </div>
    );
};

export default Home; // Exporta el componente Home para que pueda ser usado en otras partes de la aplicación.

/*
import React from 'react';
import Tareas from './tareas';

const Home = () =>{
    return(
       <div className = 'container'>
        <h1>TO DO LIST</h1>
        <Tareas/>
       </div>
    )
}

export default Home;
*/
