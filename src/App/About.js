import React from 'react';

//Componente que muestra una presentación.
function About() {
    return (
        <section id="about">
            <div className="container-fluid p-5 my-5 bg-primary text-center text-white">
                <h1 className="display-4">Hola, soy Antonio Ortiz, Desarrollador Web</h1>
                <p className="mt-5 text-white"><strong>Me dedico a la programación y al desarrollo web full stack. Busco ampliar mis conocimientos y habilidades para ponerlos en práctica entornos de trabajo.</strong></p>
            </div>
        </section>
    )
}

export default About;