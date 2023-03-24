import React from 'react';
import '../Hojas/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'ConTarea Comple' : 'ConTarea'}>
            <div 
                className='TexTarea'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
                className='IConTarea'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='IcoTarea'/>
            </div>
        </div>
    );
}

export default Tarea;