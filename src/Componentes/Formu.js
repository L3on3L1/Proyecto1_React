import React, { useState } from "react";
import '../Hojas/Formu.css';
import { v4 as uuidv4 } from 'uuid';

function Formu(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return(    
        <form 
            className='FormTarea'
            onSubmit={manejarEnvio}>
            <input
                className='InputTarea'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='BotonTarea'>
                agregar tarea
            </button>
        </form>
    );
}

export default Formu;