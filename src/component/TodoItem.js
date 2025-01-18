import '../styles/TodoItem.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
  {/* Botón para marcar como completado */}
  <button
    className={`TodoItem-Complete ${completed ? 'completed' : ''}`}
    onClick={onComplete}
    aria-label="Marcar como completado"
    title="Marcar como completado"
  >
    <AiFillCheckCircle className='AiFillCheckCircle'/>

  </button>

  {/* Texto de la tarea */}
  <p className={`TodoItem-Text ${completed ? 'TodoItem-Text--completed' : ''}`}>
    {text}
  </p>

  {/* Botón para eliminar la tarea */}
  <button
    className="TodoItem-Delete"
    onClick={onDelete}
    aria-label="Eliminar tarea"
    title="Eliminar tarea"
  >
    <CgCloseO className='CgCloseO'/>
  </button>
</li>
  );
}
export{TodoItem};