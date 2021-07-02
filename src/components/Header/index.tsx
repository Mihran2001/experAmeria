import React, { useCallback, useState } from "react";
import { Navbar } from "react-bootstrap";

import Logo from "../Logo/index";

function Header() {
  return (
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
    </Navbar>
  );
}

export default Header;
