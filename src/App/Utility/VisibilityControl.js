import React from "react";

//Componente que muestra en un tabla las tareas que ya fueron hechas.
const VisibilityControl = props => {
    return(
        <div className="form-check">
            <input 
            type="checkbox"
            className="form-check-input"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}  
        />
        <label htmlFor="form-check-label">
            Muestra las {props.description}
        </label>
        </div>
    )
}

export default VisibilityControl;