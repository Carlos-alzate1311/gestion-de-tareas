
import './App.css';
import { CreateTodoButton } from './component/CreateTodoButton';
import { TodoCounter } from './component/TodoCounter';
import { TodoItem } from './component/TodoItem';
import { TodoList } from './component/TodoList';
import { TodoSearch } from './component/TodoSearch';
function App() {
  return (
    <div className="App">

      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      
      <CreateTodoButton/>
      
      
    </div>
  );
}



export default App;
