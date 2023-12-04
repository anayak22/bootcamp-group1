import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Ashna from './Ashna'
import Emily from'./Emily'
import Sharvari from './Sharvari'
import Aram from './Aram'
import NavBar from './NavBar'

function App() {
  return (
    <div>
    <NavBar />

    <BrowserRouter>
    <Switch>
      <Route path="/ashna">
        <Ashna />
      </Route>
      <Route path="/aram">
        <Aram />
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
    </div>
  );
}

export default App;
