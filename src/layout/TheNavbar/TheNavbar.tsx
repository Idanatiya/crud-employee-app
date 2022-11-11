import "./TheNavbar.scss";

import logo from "@/assets/logo.png";
import { ORGANIZATION_NAV_LINKS } from "@/constants";

interface Props {
  setOrganization: (id: string) => void;
}

function TheNavbar({ setOrganization }: Props) {
  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className="organiztion-container">
          {ORGANIZATION_NAV_LINKS.map(({ id, name }) => (
            <li
              key={id}
              className="organization"
              onClick={() => setOrganization(id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheNavbar;
