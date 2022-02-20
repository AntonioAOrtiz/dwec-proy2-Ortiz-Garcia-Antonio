import React from 'react';

// Componente para generar un row con nombre y si fue hecha o no la tarea.
const TaskRow = props => (
    <tr key = {props.task.name}>
        <td>{props.task.name}</td>
        <td>
            <input 
            type="checkbox" 
            checked={props.task.done}
            /* Ejecuta la función dándole la tarea*/ 
            onChange={() => props.toggleTask(props.task)} 
            />
        </td>
    </tr>
)

export default TaskRow;