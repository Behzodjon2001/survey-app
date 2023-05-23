import { Card, Button, Form, Input, Radio, Select } from "antd";
// import { useState } from "react";
import elonImage from "../../assets/images/ELON.jpg";
import { useDispatch } from "react-redux";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Student.css";
import { sendData } from "../../server/common";
import { toast } from "react-toastify";
const { Option } = Select;
// import { useState } from "react";
// import { Option } from "antd/es/mentions";
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 90 }}>
      <Option value="998">+998</Option>
      {/* <Option value="87">+87</Option> */}
    </Select>
  </Form.Item>
);

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
const App = () => {
  const [studentForm] = Form.useForm();
  // const [state, setValue] = useState(1);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    studentForm.validateFields().then((values) => {
      console.log(values);
      dispatch({ type: "addStudent", data: values });
      window.location.href = "/finished";
      sendData("student/all/create", values)
        .then((res) => {
          window.location.href = "/admin";
        })
        .catch(() => {
          toast.error("Username yoki password xato!");
        });
    });
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
        // paddingTop: "-40px",
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
            name="fullname"
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
          <h2>Sinfi:</h2>
          <Form.Item name={"radiogroup"}>
            <Radio.Group
              name="radiogroup"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "16px",
              }}
            >
              <Radio value="1-Sinf">1-Sinf</Radio>
              <Radio value="2-Sinf">2-Sinf</Radio>
              <Radio value="3-Sinf">3-Sinf</Radio>
              <Radio value="4-Sinf">4-Sinf</Radio>
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

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                placeholder="(90)1234566"
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
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
                message: "Please input your Maktab!",
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
