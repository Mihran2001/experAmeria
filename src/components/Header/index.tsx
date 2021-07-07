import React, { useCallback, useState, useContext } from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Navbar } from "react-bootstrap";
import Logo from "../Logo/index";
import { DropdownButton, Dropdown } from "react-bootstrap";

// interface Ilanguage {
//   language: string;
//   setLanguage: any;
// }

function Header() {
  const [language, setLanguage] = useState<string>("ARM");
  // const handleSelect = (e: any) => {
  //   console.log(e);
  // };
  const { i18n } = useTranslation();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="white"
        className="page-navbar"
      >
        <Navbar.Brand className="navbar-brand">
          <Logo />
        </Navbar.Brand>
        <DropdownButton
          variant="outline-secondary"
          title={language}
          id="input-group-dropdown-1"
          // onSelect={handleSelect}
        >
          <Dropdown.Item
            href="#"
            eventKey="ARM"
            onClick={() => {
              setLanguage("ARM");
              i18n.changeLanguage("arm");
            }}
          >
            ARM
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            eventKey="EN"
            onClick={() => {
              setLanguage("EN");
              i18n.changeLanguage("en");
            }}
          >
            EN
          </Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </>
  );
}

export default Header;
