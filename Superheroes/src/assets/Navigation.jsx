import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heroes">Heroes</Link>  {/* Updated to /heroes */}
        </li>
        <li>
          <Link to="/villains">Villains</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
