
import React, { useState } from 'react';
// Importamos los componentes necesarios para construir la interfaz.
import { CreateTodoButton } from './component/CreateTodoButton';
import { TodoCounter } from './component/TodoCounter';
import { TodoItem } from './component/TodoItem';
import { TodoList } from './component/TodoList';
import { TodoSearch } from './component/TodoSearch';

// Lista de tareas predeterminadas, que incluye texto y estado (completado o no).
const defaultTodos = [
  { text: "Cortar cebolla", completed: true},
  { text: "tarea 1", completed: true },
  { text: "tarea 2", completed: false },
  {text: "tarea 3", completed: false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = 
  React.useState('');

  const  completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos= todos.length;

  console.log("los usuarios buscan" + searchValue);
  return (
    <React.Fragment> {/*<React.Fragment> es una herramienta útil y limpia para estructurar tu aplicación React
     sin introducir elementos HTML adicionales en el DOM. 
     Si necesitas agrupar múltiples elementos en tu componente, 
     considera usar React.Fragment o su sintaxis abreviada <> </>*/}
     
      {/* Componente que muestra el contador de tareas completadas */}
      <TodoCounter  
        completed={completedTodos} // Número de tareas completadas.
        total={totalTodos} // Total de tareas disponibles.
      />

      {/* Componente que permite buscar tareas */}
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

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
