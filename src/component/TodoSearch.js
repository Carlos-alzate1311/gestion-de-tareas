import '../styles/TodoSearch.css';

function TodoSearch() {
    return(
        <input className="TodoSearch" 
        placeholder="Ingresa Tarea"
        onChange={(event) => {
            console.log("Ecribiste en todo Search");
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
        }}></input>
    );
}
export {TodoSearch};