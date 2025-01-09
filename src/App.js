
import React from 'react';
// Importamos los componentes necesarios para construir la interfaz.
import { CreateTodoButton } from './component/CreateTodoButton';
import { TodoCounter } from './component/TodoCounter';
import { TodoItem } from './component/TodoItem';
import { TodoList } from './component/TodoList';
import { TodoSearch } from './component/TodoSearch';

// Lista de tareas predeterminadas, que incluye texto y estado (completado o no).
const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "tarea 1", completed: true },
  { text: "tarea 2", completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* Componente que muestra el contador de tareas completadas */}
      <TodoCounter 
        completed={16} // Número de tareas completadas.
        total={25} // Total de tareas disponibles.
      />

      {/* Componente que permite buscar tareas */}
      <TodoSearch />

      {/* Lista de tareas */}
      <TodoList>
        {/* Recorremos el array defaultTodos y generamos un TodoItem por cada tarea */}
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text} // Clave única para cada elemento, necesaria en listas de React.
            text={todo.text} // Texto de la tarea.
            completed={todo.completed} // Estado de la tarea (true o false).
          />
        ))}
      </TodoList>
      
      {/* Botón para crear nuevas tareas */}
      <CreateTodoButton />
      
    </React.Fragment>  
  );
}

export default App; // Exportamos el componente principal para que pueda ser usado en otros archivos.
