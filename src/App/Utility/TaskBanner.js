import React from 'react';

// Componente que muestra cuantas tareas quedan por hacer.
const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        Lista de Tareas de {props.userName} (Quedan {props.taskItems.filter(t => !t.done).length} tareas) )
    </h4>
)


export default TaskBanner