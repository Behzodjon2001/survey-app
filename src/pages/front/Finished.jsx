import { Button, Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "../Student.css";
const Finished = () => {
  return (
    <div>
      <Card
        hoverable
        // title={<h1>RUSTAM BOSIMOV XUSUSIY MAKTABI </h1>}
        bordered={false}
        className="card_responsive"
        style={{
          width: "830px",
          margin: "0 auto",
        }}
      >
        <h1 className="rustambosimov_size">RUSTAM BOSIMOV XUSUSIY MAKTABI </h1>
        <h3 className="rustambosimov_size1">Ответ записан.</h3>
        <h3>
          <NavLink to="/">
            <Button type="link">Отправить ещё один ответ</Button>
          </NavLink>
        </h3>
      </Card>
    </div>
  );
};

export default Finished;
