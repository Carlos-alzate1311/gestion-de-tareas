
import React  from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUi } from './AppUi';


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('GESTOR_TAREAS_V1', []);
  const [searchValue, setSearchValue] = 
  React.useState('');

  const  completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos= todos.length;

  // console.log('log 1')
  // console.log('loooog 2')
  
  // //  React.useEffect(() =>{
  // //    console.log('logo2');
  // //  });
  // //  React.useEffect(() =>{
  //   // console.log('logo24');
  // // },[]);}
  // // console.log('logo3')
 

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
    <AppUi
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
   );
}

export default App; // Exportamos el componente principal para que pueda ser usado en otros archivos.
