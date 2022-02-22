import React, { useState } from 'react';
import { useForm } from "react-hook-form";

//Componente que va a ser el formulario de contacto
const Contact = () => {
    // Estado para mostrar un mensaje después de submitear el formulario correctamente.
    const [message, setMessage] = useState('');
    //Estados de la librería react-hook-form para el registro(requisitos),handlesubmit(que trae la lógica de los estados), reset los campos y gestión de errores.
    const { register, handleSubmit,reset, formState: {errors} } = useForm();
    //Función que se va a ejecutar cuando el formulario sea submiteado correctamente.
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        setMessage(`Gracias por tu mensaje, ${data.nombre}.`);
        reset();
      };
    
    //Expresiones regulares para la validación del formulario.
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const nombreRegex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
    const mensajeRegex = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;
    
    
    return (
        <div className="p-5 m-5 text-center">
                <h3>Contacto</h3>
                <form className="grid" id="contact" onSubmit={handleSubmit(onSubmit)}>/*Al submiter el formulario ejecuta el manejador con la función onsubmit */
                    <div className="mt-3 mb-3">/*Si no se cumplen los requisitos de validación se muestra un mensaje con el error correspondiente*/
                        <input id="nombre" type="text" placeholder="Nombre" className="form-control"  {...register("nombre",{required: true, minLength:2, pattern:nombreRegex})} />/*Campo requerido, mínimo 2 caracteres y que cumpla la validación regex */
                        {errors.nombre && errors.nombre.type === "required" && <span>Campo obligatorio</span>}
                        {errors.nombre && errors.nombre.type === "pattern" && <span>El nombre no es válido </span>}
                        {errors.nombre && errors.nombre.type === "minLength" && <span>El nombre debe tener como mínimo dos caracteres </span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <input id="apellido" type="text" placeholder="Apellido" className="form-control" {...register("apellido",{required: true, pattern:nombreRegex})} />/*Campo requerido y que cumpla la validación regex*/
                        {errors.apellido && errors.apellido.type === "required" && <span>Campo obligatorio</span>}
                        {errors.apellido && errors.apellido.type === "pattern" && <span>El apellido no es válido</span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <input id="email" type="text" placeholder="Email" className="form-control" {...register("email",{required:true,pattern: emailRegex})} />/*Campo requerido y que cumpla la validación regex*/
                        {errors.email && errors.email.type === "required" && <span>Campo obligatorio</span>}
                        {errors.email && errors.email.type === "pattern" && <span>Email no válido</span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <textarea id="mensaje" type="textarea" placeholder="Mensaje" className="form-control" rows="5" {...register("mensaje",{required: true,maxLength:255,minLength:10, pattern: mensajeRegex})} />/*Campo requerido, 255 caracteres como máximo, 10 caracteres como mínimo y que cumpla la validación regex*/
                        {errors.mensaje && errors.mensaje.type === "required" && <span>Campo obligatorio</span>}
                        {errors.mensaje && errors.mensaje.type === "maxLength" && <span>El mensaje debe tener como máximo 255 caracteres</span>}
                        {errors.mensaje && errors.mensaje.type === "minLength" && <span>El mensaje debe tener como mínimo 10 caracteres</span>}
                        {errors.mensaje && errors.mensaje.type === "pattern" && <span>Mensaje no válido</span>}
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary m-2">Enviar</button>
                </form>
                {message}
        </div>    
    );
}

export default Contact;