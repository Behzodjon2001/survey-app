import { Card, Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import PhoneInput from "antd-phone-input";
import elonImage from "../assets/images/ELON.jpg";
import "./Student.css";
import { useDispatch } from "react-redux";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const validator = (_, { valid }) => {
  if (valid) {
    return Promise.resolve();
  }
  return Promise.reject("Invalid phone number");
};
const App = () => {
  const [studentForm] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    studentForm.validateFields().then((values) => {
      console.log(values);
      dispatch({ type: "addStudent", data: values });
    });
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onReset = () => {
    studentForm.resetFields();
  };

  return (
    <Form
      {...formItemLayout}
      form={studentForm}
      name="register"
      onFinish={onFinish}
      className="form_responsive"
      style={{
        maxWidth: 830,

        margin: "0 auto",
      }}
      scrollToFirstError
    >
      <div className="cards">
        <Card
          hoverable
          // title={<h1>RUSTAM BOSIMOV XUSUSIY MAKTABI </h1>}
          bordered={false}
          className="card_responsive"
          style={{
            width: "830px",
          }}
        >
          <h1 className="rustambosimov_size">
            RUSTAM BOSIMOV XUSUSIY MAKTABI{" "}
          </h1>
          <h3 className="rustambosimov_size1">
            30-APREL KUNI MATEMATIKA FANIDAN RUSTAM BOSIMOV OLIMPIADASI bo'lib
            o'tadi{" "}
          </h3>
          <h3>
            Olimpiada vaqtlari <br /> 4-sinflar- 09:00 <br /> 3-sinflar- 11:00{" "}
            <br />
            2-sinflar- 13:00 <br /> 1-sinflar- 14:00{" "}
          </h3>
          <hr
            style={{
              width: "830px",
              marginLeft: "-24px",
              color: "rgb(187, 176, 176)",
            }}
            className="card_responsive"
          />
          <Form.Item
            name="email"
            label="E-mail"
            style={{
              display: "flex",
              padding: "20px 5px 0px 0px",
            }}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              className="input_header_responsive"
              style={{
                width: "460px",
                marginTop: "10px",
                marginLeft: "-100px",
              }}
            />
          </Form.Item>
        </Card>
        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
            padding: " 60px 36px 20px 36px",
          }}
          cover={<img alt="example" src={elonImage} />}
        ></Card>

        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
            height: 200,
          }}
        >
          <Form.Item
            name="FullName"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your FullName!",
                whitespace: true,
              },
            ]}
          >
            <div className="familiya_imya">
              <h2>Familyasi va Ismi</h2>
              <Input placeholder="Мой ответ" className="input_fullname" />
            </div>
          </Form.Item>
        </Card>
        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
          }}
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please choose item",
              },
            ]}
          >
            <h2>Sinfi</h2>
            <Radio.Group
              name="sinfi"
              style={{ display: "flex", flexDirection: "column" }}
              onChange={onChange}
              value={value}
            >
              <Radio className="sinflar" value={"1-Sinf"}>
                1-Sinf
              </Radio>
              <Radio className="sinflar" value={"2-Sinf"}>
                2-Sinf
              </Radio>
              <Radio className="sinflar" value={"3-Sinf"}>
                3-Sinf
              </Radio>
              <Radio className="sinflar" value={"4-Sinf"}>
                4-Sinf
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Card>

        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
          }}
        >
          <div className="phonenumber_user">
            <h2>Telefon:</h2>

            <Form.Item name="phone" rules={[{ validator }]}>
              <PhoneInput />
            </Form.Item>
          </div>
        </Card>

        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
          }}
        >
          <div className="h1_maktab">
            <h2>
              Maktab № <br />
              Masalan (1-maktab){" "}
            </h2>
          </div>
          <Form.Item
            name="maktab"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your FullName!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Мой ответ" className="input_fullname" />
          </Form.Item>
        </Card>
        <Card
          hoverable
          className="card_responsive"
          style={{
            width: 830,
          }}
        >
          <div className="h1_maktab">
            <h2>Shahar yoki tuman</h2>
          </div>
          <Form.Item
            name="tuman"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your Shahar!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Мой ответ" className="input_fullname" />
          </Form.Item>
        </Card>

        <div className="register_div">
          <Form.Item {...tailFormItemLayout} className="register">
            <Button className="otpravit_back" type="primary" htmlType="submit">
              <div className="btn-otpravit">Отправить</div>
            </Button>
          </Form.Item>
          <Button className="ochistetformu" htmlType="button" onClick={onReset}>
            <div className="ochitit_harf">Очистить форму</div>
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default App;
