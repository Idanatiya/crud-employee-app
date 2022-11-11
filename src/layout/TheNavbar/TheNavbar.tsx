import "./TheNavbar.scss";

import React from "react";

import { Organization } from "@/types";
import logo from "@/assets/logo.png";

interface Props {
  organizations: Organization[];
  setOrganization: (id: string) => void;
}

function TheNavbar({ organizations, setOrganization }: Props) {
  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className="organiztion-container">
          {organizations.map(organiztion => (
            <li
              key={organiztion.id}
              className="organization"
              onClick={() => setOrganization(organiztion.id)}
            >
              {organiztion.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheNavbar;
