import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {


  return <nav>
    <ul className="nav-container">
       <Link className="nav-links" to="/products">Products</Link> 
        <Link className="nav-links" to="/about">About us</Link> 
        <Link className="nav-links" to="/register">Add game</Link> 
    </ul>    
  </nav>
}

export default Navbar