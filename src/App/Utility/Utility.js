import React, { useState } from 'react';
import TaskRow from './TaskRow';
import TaskBanner from './TaskBanner';
import TaskCreator from './TaskCreator';

function Utility() {

    const [userName, setUsername] = useState("Cristina");
    const [taskItems, setTaskItems] = useState([
        { name: "Tarea Uno", done: false },
        { name: "Tarea Dos", done: false },
        { name: "Tarea Tres", done: true },
        { name: "Tarea Cuatro", done: false }
    ]);

    // Función que recibe el nombre de una tarea nueva y la agrega a la lista de tareas si no fue ya agregada.
    const createNewTask = taskName => {
        if (!taskItems.find(t => t.name === taskName)){
            setTaskItems([...taskItems, {name: taskName, done: false}])
        }
    }

    //Recibe una tarea y por cada tarea que reciba cambia el estado de los items.
    const toggleTask = task =>
        //Recorro la lista de tareas y si el nombre coincide con la tarea que están dando, cambia el valor done de la tarea.
        setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));

    //Función que recorre las tareas y las muestra en pantalla generando múltiples rows.
    const TaskTableRows = () => 
        taskItems.map(task => (
            <TaskRow task={task} key={task.name} toggleTask ={toggleTask} />
        ))
    
    

    return (
        <section id="utility">
            <TaskBanner userName={userName} taskItems={taskItems} />

            <TaskCreator callback={createNewTask} />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Hecha</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskTableRows />
                </tbody>
            </table>
        </section>
    );
}

export default Utility;
