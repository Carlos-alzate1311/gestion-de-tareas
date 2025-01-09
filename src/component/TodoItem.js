// Definimos un componente funcional llamado `TodoItem`.
// Este componente recibe `text` como prop, que representa el texto de una tarea.
function TodoItem({ text }) {
    return (
      <li>
        {/* 
          Elemento de lista (<li>) que representa una tarea individual. 
          Contiene un símbolo de "completado", el texto de la tarea, 
          y un símbolo para eliminarla.
        */}
  
        {/* Botón o símbolo para marcar la tarea como completada (por ahora solo muestra "v"). */}
        <samp>
          v
        </samp>
  
        {/* Muestra el texto de la tarea pasada como prop. */}
        <p>{text}</p>
  
        {/* Botón o símbolo para eliminar la tarea (por ahora solo muestra "x"). */}
        <samp>
          x
        </samp>
      </li>
    );
  }
  
  // Exportamos el componente `TodoItem` para que pueda ser utilizado en otros archivos.
  export { TodoItem };
  