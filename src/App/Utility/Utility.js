import React, { useState, useEffect } from 'react';
import TaskRow from './TaskRow';
import TaskBanner from './TaskBanner';
import TaskCreator from './TaskCreator';
import VisibilityControl from './VisibilityControl';

//Componente con un CRUD de lista de tareas.
function Utility() {
    //Estado con el se cambia el nombre de usuario.
    const [userName, setUsername] = useState("Cristina");
    //Estado con el que se modifica el los items de la lista de tareas.
    const [taskItems, setTaskItems] = useState([
        { name: "Tarea Uno", done: false },
        { name: "Tarea Dos", done: false },
        { name: "Tarea Tres", done: true },
        { name: "Tarea Cuatro", done: false }
    ]);
    // Estado con el que se modifica el valor true o false de done de las tareas.
    const [showCompleted, setShowCompleted] = useState(true)

    //Ejecutamos esta función con useEffect cuando hay cambio de datos para guardarlos en el localStorage y recuperarlos.
    useEffect(() => {
        // Si existen datos, se toman esos datos y se agregan a la aplicación.
        let data = localStorage.getItem("tasks");
        let userName = localStorage.getItem("username");
        if (data != null) {
            setTaskItems(JSON.parse(data))
            setUsername(JSON.parse(userName))
        // Si no existen datos se añaden datos de ejemplo.
        }else {
            setUsername("Usuario");
            setTaskItems([
                { name: "Ver el portfolio completo", done: false },
                { name: "Probar la lista de tareas", done: false },
                { name: "Abrir la aplicación de portfolio", done: true },
                { name: "Contactar con Antonio Ortiz", done: false }
            ])
            setShowCompleted(true);
        }
    },[]);

    // Guardo los datos en el localStorage cada vez que cambie la lista de tareas.
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskItems));
    },[taskItems]);

    // Guardo el nombre introducido en el localstorage cada vez que cambie.
    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(userName));
    },[userName]);

    

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

    //Función que recorre las tareas y las muestra en pantalla generando múltiples rows. Con un parámetro done para filtrar las tareas por hechas o no hechas y pintarlas por separado. 
    const TaskTableRows = (doneValue) => 
        taskItems
        .filter(task => task.done === doneValue)
        .map(task => (
            <TaskRow task={task} key={task.name} toggleTask ={toggleTask} />
        ));
    
    

    return (
        <section id="utility" className=" border border-2 border-dark p-5 m-5">
            <TaskBanner userName={userName} taskItems={taskItems} />
            <input className="form-control" type="text" placeholder="Introduce tu nombre" 
            onChange={e => setUsername(e.target.value)} />
            <TaskCreator callback={createNewTask} />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Hecha</th>
                    </tr>
                </thead>
                <tbody>
                    {TaskTableRows(false)} 
                </tbody>
            </table>
            <div className="bg-secondary text-white p-2">
                <VisibilityControl 
                    description="Tareas Finalizadas"
                    isChecked={showCompleted}
                    callback={checked => setShowCompleted(checked)}
                />
            </div>
            {
                showCompleted && (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Hecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TaskTableRows(true)}
                        </tbody>
                    </table>
                )
            }
        </section>
    );
}

export default Utility;
