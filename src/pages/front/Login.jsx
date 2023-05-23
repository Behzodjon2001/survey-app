import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./Login.css";
import { sendData } from "../../server/common";
import { TOKEN } from "../../const";
import { toast } from "react-toastify";
const Login = () => {
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    sendData("auth/login", values)
      .then((res) => {
        localStorage.setItem(TOKEN, res.data.jwt);
        toast.success("Xush kelibsiz");
        window.location.href = "/admin";
      })
      .catch(() => {
        toast.error("Username yoki password xato!");
      });
  };
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: 570 }}>Admin panel kirish uchun :</h1>
        <h2 style={{ marginLeft: 600, marginBottom: 40 }}>
          username: admin <br />
          password: 123
        </h2>
      </div>
      <Form
        style={{ margin: "0 auto" }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="usernames"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <p className="login-form-forgot">Forgot password</p>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
