import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand ps-4" href="#">Navbar w/ text</a>
          <ul className="d-flex justify-content-center m-0" style={{listStyle: "none"}}>
            <li className="px-4 text-decoration-none text-white">
              <Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
            </li>
            <li className="px-4 text-decoration-none text-white">
              <Link to="/movies" style={{textDecoration: "none", color: "white"}}>Movies</Link>
            </li>
            <li className="px-4 text-decoration-none text-white">
              <Link to="/about" style={{textDecoration: "none", color: "white"}}>About</Link>
            </li>
            <li className="px-4 text-decoration-none text-white">
              <Link to="/admin" style={{textDecoration: "none", color: "white"}}>Admin</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="movies/*" element={<Movies />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
