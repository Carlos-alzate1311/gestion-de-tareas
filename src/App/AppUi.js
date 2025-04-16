

// Importamos los componentes necesarios para construir la interfaz.
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContex } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';


function AppUi (){
    return (
        <> {/*<React.Fragment> es una herramienta útil y limpia para estructurar tu aplicación React sin introducir elementos HTML adicionales en el DOM. Si necesitas agrupar múltiples elementos en tu componente, considera usar React.Fragment o su sintaxis abreviada <> </>*/}
         
          {/* Componente que muestra el contador de tareas completadas */}
          <TodoCounter />
    
          {/* Componente que permite buscar tareas */}
          <TodoSearch  />


          <TodoContex.Consumer>
          {/* Lista de tareas */}
            { ({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo
            }) => (
              <TodoList>
              {loading && (
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                </>
                )}
              {error && <TodosError/>}
              { (!loading && searchedTodos.length === 
                0) && <EmptyTodos/>}
                
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
            )}
          </TodoContex.Consumer>

          {/* Botón para crear nuevas tareas */}
          <CreateTodoButton />
          
        </>  
      );
}
export { AppUi};