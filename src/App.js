
import React  from 'react';
// Importamos los componentes necesarios para construir la interfaz.
import { CreateTodoButton } from './component/CreateTodoButton';
import { TodoCounter } from './component/TodoCounter';
import { TodoItem } from './component/TodoItem';
import { TodoList } from './component/TodoList';
import { TodoSearch } from './component/TodoSearch';

// Lista de tareas predeterminadas, que incluye texto y estado (completado o no).
//  const defaultTodos = [
  //  { text: "Cortar cebolla", completed: true},
  //  { text: "tarea 1", completed: true },
  //  { text: "tarea 2", completed: false },
  //  {text: "tarea 3", completed: false}
 // ];
 // localStorage.setItem('GESTOR_TAREAS_V1',JSON.stringify(defaulTodos));

 function useLocalStorage(itemName, initialValue) {
   
   const localStorageItem = localStorage.getItem(
    itemName);
  

    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName,
       JSON.stringify([initialValue]));
      parsedItem = [initialValue];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, 
        JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
 }
function App() {
 

 

  const [todos, saveTodos] = useLocalStorage('GESTOR_TAREAS_V1', []);
  const [searchValue, setSearchValue] = 
  React.useState('');

  const  completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos= todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
    
    }
  );

  

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
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
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text} // Clave única para cada elemento, necesaria en listas de React.
            text={todo.text} // Texto de la tarea.
            completed={todo.completed} // Estado de la tarea (true o false).
            onComplete={() => completeTodo(todo.text)}
            onDelete={() =>deleteTodo(todo.text) }
          />
        ))}
      </TodoList>
      
      {/* Botón para crear nuevas tareas */}
      <CreateTodoButton />
      
    </React.Fragment>  
  );
}

export default App; // Exportamos el componente principal para que pueda ser usado en otros archivos.
