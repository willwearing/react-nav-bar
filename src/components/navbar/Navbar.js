import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [on, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(!on);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={onSubmit}>
          <i className={on ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={on ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    </div>
  );
};

export default Navbar;
