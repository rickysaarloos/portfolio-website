import './Nav.css'
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Discover">discover</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Navigation;