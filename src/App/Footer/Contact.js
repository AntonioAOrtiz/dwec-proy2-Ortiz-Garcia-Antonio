import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Contact = () => {
    
    const [message, setMessage] = useState('');
    const { register, handleSubmit,reset, formState: {errors} } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        setMessage(`Gracias por tu mensaje, ${data.nombre}.`);
        reset();
      };
    

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const nombreRegex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
    const mensajeRegex = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;
    
    
    return (
        <div className="p-5 m-5 text-center">
                <h3>Contacto</h3>
                <form className="grid" id="contact" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-3 mb-3">
                        <input id="nombre" type="text" placeholder="Nombre" className="form-control"  {...register("nombre",{required: true, minLength:2, pattern:nombreRegex})} />
                        {errors.nombre && errors.nombre.type === "required" && <span>Campo obligatorio</span>}
                        {errors.nombre && errors.nombre.type === "pattern" && <span>El nombre no es válido </span>}
                        {errors.nombre && errors.nombre.type === "minLength" && <span>El nombre debe tener como mínimo dos caracteres </span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <input id="apellido" type="text" placeholder="Apellido" className="form-control" {...register("apellido",{required: true, pattern:nombreRegex})} />
                        {errors.apellido && errors.apellido.type === "required" && <span>Campo obligatorio</span>}
                        {errors.apellido && errors.apellido.type === "pattern" && <span>El apellido no es válido</span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <input id="email" type="text" placeholder="Email" className="form-control" {...register("email",{required:true,pattern: emailRegex})} />
                        {errors.email && errors.email.type === "required" && <span>Campo obligatorio</span>}
                        {errors.email && errors.email.type === "pattern" && <span>Email no válido</span>}
                    </div>
                    <div className="mt-3 mb-3">
                        <textarea id="mensaje" type="textarea" placeholder="Mensaje" className="form-control" rows="5" {...register("mensaje",{required: true,maxLength:255,minLength:10, pattern: mensajeRegex})} />
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