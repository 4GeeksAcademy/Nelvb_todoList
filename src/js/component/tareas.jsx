import React, { useState } from 'react';

const Tareas = ({ toDoTasks, setToDoTasks }) => {
    const [inputValue, setInputValue] = useState('');

    const addToDoTask = (e) => {
        if (e.key === 'Enter') { // Verifica si la tecla presionada es 'Enter'.
            if (inputValue.trim() === '') {
                alert('Por favor, escribe una tarea antes de añadirla.');
            } else {
                setToDoTasks([...toDoTasks, inputValue.trim()]); // Añade el valor del input a la lista de tareas.
                setInputValue(''); // Limpia el valor del input.
            }
        }
    };

    const removeToDoTask = (index) => {
        const newToDoTasks = toDoTasks.filter((_, i) => i !== index); // Crea una nueva lista de tareas
        setToDoTasks(newToDoTasks); // Actualiza el estado con la nueva lista de tareas.
    };

    return (
        <div className="toDoTask-list tarjeta">
            <input
                type="text"
                placeholder="Añade una nueva tarea"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando el usuario escribe.
                onKeyDown={addToDoTask} // Llama a addToDoTask cuando se presiona una tecla.
            />
            {toDoTasks.length === 0 ? (
                <p>No hay tareas, añadir tareas</p>
            ) : ( // ')'cierra si la condicion es true, '(' abre si es falsa, como 'if else'.
                toDoTasks.map((task, index) => (
                    <div key={index} className="toDoTask-item">
                        {task}
                        <button onClick={() => removeToDoTask(index)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Tareas;
