import "./TheSidebar.scss";

import { FaAddressCard, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function TheSidebar() {
  return (
    <aside className="sidebar-container">
      <nav className="links-container">
        <Link to="/">
          <FaAddressCard className="icon" />
        </Link>
        <Link to="/employee">
          <FaUser className="icon" />
        </Link>
      </nav>
      <div className="spacer"></div>
      <a href="https://github.com/Idanatiya" className="programmer-name">
        Idan Atiya 🦄
      </a>
    </aside>
  );
}

export default TheSidebar;
