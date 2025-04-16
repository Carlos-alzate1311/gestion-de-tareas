
import React  from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext/TodoContext';


function App() {
   return (
      <TodoProvider>
         <AppUi/>
      </TodoProvider>
    
   );
}

export default App; // Exportamos el componente principal para que pueda ser usado en otros archivos.
