import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Content } = Layout;

const AdminLayout = ({ children }) => {
  // const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("0");

  const menus = [
    // { name: "Student", to: "", icon: <UsergroupAddOutlined /> },
    // { name: "Admin", to: "admin", icon: <HomeOutlined /> },
  ];
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[current]}
        items={menus.map((menu, i) => ({
          key: "" + i,
          icon: <Link to={"/" + menu.to}>{menu.icon}</Link>,
          label: menu.name,
          onClick: ({ key }) => setCurrent(key),
        }))}
      />

      <Content>{children}</Content>
    </>
  );
};
export default AdminLayout;
