import React from 'react';
//Componente que va a mostrar los estudios realizados.
function Academics() {
    return (
        <section id="academics">
            <div className="container p-4 my-4 text-left text-body">
                <h2 className="display-5 text-center"><u>Formación académica</u></h2>
                <ul className="list-group p-3">
                    <li className="list-group-item bg-primary text-center text-white"><strong>C.F.G.S. en Desarrollo de Aplicaciones Web.</strong></li>
                    <li className="list-group-item bg-primary text-center text-white">C.F.G.S. en Vitivinicultura.</li>
                    <li className="list-group-item bg-primary text-center text-white">Bachillerato en Ciencias de la Naturaleza y Salud.</li>
                </ul>
            </div>
        </section>
    )
}

export default Academics;