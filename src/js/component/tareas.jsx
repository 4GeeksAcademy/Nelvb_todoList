import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca de React.

const Tareas = ({toDoTasks, setToDoTasks}) => { // Define el componente Tareas como una función de flecha.
    //const [toDoTasks, setToDoTasks] = useState([]); // Define un estado local 'toDoTasks' con un arreglo vacío como valor inicial.
    const [inputValue, setInputValue] = useState(''); // Define un estado local 'inputValue' con una cadena vacía como valor inicial.

    const addToDoTask = (e) => { // Define una función llamada addToDoTask que se ejecuta cuando se presiona una tecla.
        if (e.key === 'Enter' && inputValue.trim() !== '') { // Verifica si la tecla presionada es 'Enter' y el input no está vacío.
            setToDoTasks([...toDoTasks, inputValue.trim()]); // Añade el valor del input a la lista de tareas.
            setInputValue(''); // Limpia el valor del input.
        }
    };

    const removeToDoTask = (index) => { // Define una función llamada removeToDoTask que recibe un índice.
        const newToDoTasks = toDoTasks.filter((_, i) => i !== index); // Crea una nueva lista de tareas excluyendo la tarea en el índice dado.
        setToDoTasks(newToDoTasks); // Actualiza el estado con la nueva lista de tareas.
    };

    return ( // Lo que esta función retorna es lo que se va a renderizar en la pantalla.
        <div className="toDoTask-list tarjeta"> {/* Crea un div con las clases "toDoTask-list" y "tarjeta". */}
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue} // Valor del input controlado por el estado
                onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando el usuario escribe
                onKeyDown={addToDoTask} // Llama a addToDoTask cuando se presiona una tecla
            /> {/* Input para agregar nuevas tareas */}
            {toDoTasks.length === 0 ? ( // Verifica si la lista de tareas está vacía.
                <p>No hay tareas, añadir tareas</p> // Muestra un mensaje si no hay tareas.
            ) : (
                toDoTasks.map((_, index) => ( // Mapea cada tarea en la lista de tareas.
                    <div key={index} className="toDoTask-item"> {/* Crea un div para cada tarea. */}
                        {_} {/* Muestra el texto de la tarea. */}
                        <button onClick={() => removeToDoTask(index)}>X</button> {/* Botón para eliminar la tarea. */}
                    </div>
                ))
            )}
        </div>
    );
};

export default Tareas; // Exporta el componente Tareas para que pueda ser usado en otras partes de la aplicación.
