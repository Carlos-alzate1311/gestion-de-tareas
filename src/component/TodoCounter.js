import '../styles/TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        
        <h1 className='TodoCounter'>
            HAS COMPLETADO  { completed } DE   { total }   TAREAS
        </h1>
        
    );
}
export{TodoCounter};