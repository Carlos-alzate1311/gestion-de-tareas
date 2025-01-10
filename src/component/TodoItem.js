import '../styles/TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`TodoItem ${completed ? 'completed' : ''}`}>
      {/* Botón para marcar la tarea como completada */}
      <span 
        className="TodoItem-Completed" 
        onClick={onComplete}
        title="Marcar como completado"
      >
        ✔
      </span>

      {/* Texto de la tarea */}
      <p className="TodoItem-Text">{text}</p>

      {/* Botón para eliminar la tarea */}
      <span 
        className="TodoItem-Delete" 
        onClick={onDelete}
        title="Eliminar tarea"
      >
        ✖
      </span>
    </li>
  );
}

export { TodoItem };

