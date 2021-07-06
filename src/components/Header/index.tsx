import React, { useCallback, useState, useContext } from "react";
import "./style.scss";
import { Navbar } from "react-bootstrap";
import Logo from "../Logo/index";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { languageContext } from "../providers/LanguageProvider";

function Header() {
  const { language, setLanguage } = useContext<any>(languageContext);
  const handleSelect = (e: any) => {
    console.log(e);
  };
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
          // onChange={(e: any) => setLanguage(() => e.target.value)}
          onSelect={handleSelect}
        >
          <Dropdown.Item
            href="#"
            eventKey="ARM"
            onClick={() => setLanguage(() => "ARM")}
          >
            ARM
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            eventKey="EN"
            onClick={() => setLanguage("EN")}
          >
            EN
          </Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </>
  );
}

export default Header;
