// import React from 'react';
// import './TodosLoading.css';

// function TodosLoading() {
//   return (
//     <p className="loading-message">
//       Cargando tareas...
//     </p>
//   );
// }

// export { TodosLoading };


import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-line long"></div>
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line short"></div>
    </div>
  );
}

export { TodosLoading };

