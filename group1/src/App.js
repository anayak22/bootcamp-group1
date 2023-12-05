import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import Ashna from './Ashna'
import Emily from'./Emily'
import Sharvari from './Sharvari'
import Aram from './Aram'
import NavBar from './NavBar'
import Home from './Home'
import Margaret from './Margaret'


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <div className="navBar">
        <NavBar />
        </div>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aram" element={<Aram/>} />
            <Route path="/ashna" element={<Ashna/>} />
            <Route path="/emily" element={<Emily/>} />
            <Route path="/margaret" element={<Margaret/>} />
            <Route path="/sharvari" element={<Sharvari/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
