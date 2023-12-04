import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import './NavBar.css';

cosnt NavBar() {
    return (
      <div id="navbar-rectangle">
        <div id = "inner-rectangle">
          <h1 id = "title">Team 1</h1>
        </div>
        <div id="group1">
        <div class="tab">
        <Link to="/ashna">Ashna</Link>
        </div>
        <div class="tab">
        <Link to="/aram">Aram</Link>
        </div>
        <div class="tab">
        <Link to="/emily">Emily</Link>
        </div>
        <div class="tab">
        <Link to="/margaret">Margaret</Link>
        </div>
        <div class="tab">
        <Link to="/sharvari">Sharvari</Link>
        </div>
        </div>
      </div>
        
    );
}
export default NavBar;
