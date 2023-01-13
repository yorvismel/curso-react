import React from 'react';


export default function Probar  () {
    var dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' , 'domingo']
    return (
        <div>
        <h2>Hola soy otro componente</h2>
        <ul>
            {dias.map ((el, index) => (
                <li key={index}>{el}</li>
            ))}
        </ul>
        </div>

    )
}