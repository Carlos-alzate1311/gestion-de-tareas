import React from 'react';
import './TodoCounter.css';
import { TodoContex } from '../TodoContext/TodoContext';

function TodoCounter() {
   const {
    completedTodos,
          totalTodos,
   } = React.useContext(TodoContex)
    return(
        
        <h1 className='TodoCounter'>
            HAS COMPLETADO  { completedTodos } DE   { totalTodos }   TAREAS
        </h1>
        
    );
}
export{TodoCounter};