import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const index = ({ children }) => {
  return (
    <>
      <header>
        <NavLink to="/">
          <Button style={{ marginBottom: 20 }} type="primary">
            Go to Registration
          </Button>
        </NavLink>
        <nav>
          <NavLink to="/">Admin Panel</NavLink>{" "}
        </nav>
        {children}
      </header>
    </>
  );
};

export default index;
