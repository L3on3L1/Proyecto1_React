import React, { useState } from 'react';
import '../Hojas/Lista.css'
import Formu from './Formu'
import Tarea from './Tarea'


function Lista() {

    const[tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim(); 
            const tareasActualizadas = [tarea, ...tareas]; 
            setTareas(tareasActualizadas);      
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
        /*Fragmentos, cuando se colocan etiquetas vacias*/
        <>
            <Formu onSubmit={agregarTarea} />
            <div className='ListaTarea'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                          /*Key identifica los elementos en la lsita y debe ser unico*/
                          key={tarea.id}
                          id={tarea.id}  
                          texto={tarea.texto}
                          completada={tarea.completada}
                          completarTarea={completarTarea}
                          eliminarTarea={eliminarTarea} />
                    )
                }
            </div>
        </>
    );
}

export default Lista