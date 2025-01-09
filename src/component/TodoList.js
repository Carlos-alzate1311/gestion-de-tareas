// Definimos un componente funcional llamado `TodoList`.
// Este componente sirve como contenedor para una lista de elementos.
// Recibe `children` como prop, que representa los elementos hijos que se pasarán a este componente.
function TodoList({ children }) {
    return (
      // Utilizamos un elemento de lista desordenada (<ul>) para agrupar los elementos hijos.
      <ul>
        {/* Renderizamos los elementos hijos que se pasen como `children`. */}
        {children}
      </ul>
    );
  }
  
  // Exportamos el componente `TodoList` para que pueda ser utilizado en otros archivos.
  export { TodoList };
  