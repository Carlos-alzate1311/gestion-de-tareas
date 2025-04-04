

// Importamos los componentes necesarios para construir la interfaz.
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';


function AppUi ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
    

}){
    return (
        <> {/*<React.Fragment> es una herramienta útil y limpia para estructurar tu aplicación React
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
          {loading && <p>Loading...</p>}
          {error && <p> error!!</p>}
          { (!loading && searchedTodos.length === 
            0) && <p>Create your first task</p>}
            
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
          
        </>  
      );
}
export { AppUi};