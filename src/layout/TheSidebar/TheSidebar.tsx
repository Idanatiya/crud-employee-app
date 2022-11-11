import "./TheSidebar.scss";
import { FaUser, FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

function TheSidebar() {
  return (
    <aside className="sidebar-container">
      <div className="logo-container">
        {/* <img src={logo} className="app-logo" alt="placer-logo" /> */}
      </div>
      <nav className="links-container">
        <Link to="/">
          <FaAddressCard className="icon" />
        </Link>
        <Link to="/employee">
          <FaUser className="icon" />
        </Link>
      </nav>
      <div className="spacer"></div>
    </aside>
  );
}

export default TheSidebar;
