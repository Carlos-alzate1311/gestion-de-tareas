import React from 'react';
import './TodoSearch.css';
import { TodoContex } from '../TodoContext/TodoContext';

function TodoSearch() {
        const {
            searchValue ,
             setSearchValue
        } = React.useContext(TodoContex)
    

    return(
        <input
         className="TodoSearch" 
        placeholder="Ingresa Tarea"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
            
        }}/>
    );
}
export {TodoSearch};