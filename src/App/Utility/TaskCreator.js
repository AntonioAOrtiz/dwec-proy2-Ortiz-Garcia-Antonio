import React, { useState } from 'react';

// Componente que crea tareas.
const TaskCreator = props => {
    
    // Estado que va a cambiar de cadena vacía con la tarea que va a pasar e usuario.
    const [newTaskName, setNewTaskName] = useState("");
    
    // Función que tiene un evento que va a ir cambiando el valor según lo que esté escribiendo el usuario.
    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    // Función que va a crear las tareas.
    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName("");
    }

    return(
        <div className="my-3">
            <input 
            type="text"
            className="form-control"
            placeholder="Nueva Tarea"
            value={newTaskName}
            onChange={updateNewTaskValue}
            />
            <button className="btn btn-primary mt-3" onClick={createNewTask}>
                Nueva Tarea
            </button>
        </div>
    )
}

export default TaskCreator;