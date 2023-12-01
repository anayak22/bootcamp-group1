import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <BrowserRouter>
    <Switch>
      <Route path="/ashna">
        <Ashna />
      </Route>
      <Route path="/emily">
        <Emily />
      </Route>
      <Route path="/sharvari">
        <Sharvari />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
    );
}
export default NavBar;
