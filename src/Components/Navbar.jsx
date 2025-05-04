// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="brand">Guardian of galaxy</div>
      <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <li>
          <Link to="/neos">Neos</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/planetslab">PlanetsLab</Link>
        </li>
        <li>
          <Link to="/NeosTable">NeosTable</Link>
        </li>
        {/* <li>
          <Link to="/ PHAVisualization">PHAVisualization</Link>
        </li> */}
        {/* <li>
          <Link
            to="/PlotAsteroidOrbits>
"
          >
            PlotAsteroidOrbits
          </Link>
        </li> */}

      </ul>
      <div className="menu-toggle" onClick={handleToggle}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
