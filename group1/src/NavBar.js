import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import './NavBar.css';

function NavBar() {
    return (
      <div id="navbar-rectangle">
        <div id = "inner-rectangle">
          <Link className = "titleNav" to="/">Team 1</Link>
        </div>
        <div id="group1">
        
        <Link className = "link" to="/ashna">Ashna</Link>
        <Link className = "link" to="/aram">Aram</Link>
        <Link className = "link" to="/emily">Emily</Link>
        <Link className = "link" to="/margaret">Margaret</Link>
        <Link className = "link" to="/sharvari">Sharvari</Link>
        </div>
      </div>
        
    );
}
export default NavBar;
