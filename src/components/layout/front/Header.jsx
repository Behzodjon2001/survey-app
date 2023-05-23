import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="heafer_go_admin">
      <nav className="header_stu_login">
        <NavLink to="/">
          <Button type="primary">Registration</Button>
        </NavLink>
        <br />
        <br />
        <NavLink to="/login">
          <Button type="primary">Login</Button>
        </NavLink>
      </nav>
      <span style={{ color: "red" }} className="span_padding">
        Admin panel kirish uchun <br /> Login ga kiring
      </span>
    </header>
  );
};

export default Header;
