import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Blogs</h1>
        <ul>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to=''>Contact</NavLink></li>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/home'>Sweet Home</NavLink></li>
          <li><NavLink to='/home'>Home Home</NavLink></li>

        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
