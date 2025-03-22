import React from 'react';
import { Link } from 'react-router-dom';


/**
 * 
 * Component to show a message when the url is invalid 
 * 
 */
function Fail() {
  return (
    <div>
      <h2> vinculo no valido</h2>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Fail;
