import { Button, Form, Input, Modal, Table, Radio, Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import PhoneInput from "antd-phone-input";

import {
  addStudentAction,
  deleteStudentAction,
  editStudentAction,
} from "../../redux/action/studentAction";
// import { deleteStudentAction } from "../redux/action/studentAction";
import { ExclamationCircleFilled } from "@ant-design/icons";
import axios from "axios";
import { ENDPOINT, TOKEN } from "../../const";
import { sendData } from "../../server/common";
const { Option } = Select;
const { confirm } = Modal;
// const validator = (_, { valid }) => {
//   if (valid) {
//     return Promise.resolve();
//   }
//   return Promise.reject("Invalid phone number");
// };

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 90 }}>
      <Option value="998">+998</Option>
      {/* <Option value="87">+87</Option> */}
    </Select>
  </Form.Item>
);

const Admin = () => {
  const columns = [
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "FullName",
      key: "fullname",
      dataIndex: "fullname",
    },
    {
      title: "Sinfi",
      key: "radiogroup",
      dataIndex: "radiogroup",
    },
    {
      title: "Telefon",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Maktab",
      key: "maktab",
      dataIndex: "maktab",
    },
    {
      title: "Tuman",
      key: "tuman",
      dataIndex: "tuman",
    },
    {
      width: 200,
      title: "Actions",
      render: (row) => (
        <>
          <Button type="primary" onClick={() => editstudent(row.id)}>
            Edit
          </Button>
          <Button type="primary" danger onClick={() => deleteStudent(row.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const [studentForm] = Form.useForm();
  // const [setSelectedstudent] = useState(null);
  const dispatch = useDispatch();
  // const { students } = useSelector((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedStudent) {
      studentForm.validateFields().then((values) => {
        dispatch(editStudentAction({ id: selectedStudent, ...values }));
        axios
          .put(ENDPOINT + "student/adm/update/" + dataUpdate, values, {
            headers: { Authorization: "Bearer " + token },
          })
          .finally(setLoading(false));
        window.location.href = "/admin";
      });
    } else {
      studentForm.validateFields().then((values) => {
        dispatch(addStudentAction(values));
        sendData("/student/all/create", values);
        window.location.href = "/admin";
      });
    }

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const openFormModal = () => {
    showModal();
    setSelectedStudent(null);
    studentForm.resetFields();
  };
  const token = localStorage.getItem(TOKEN);
  const deleteStudent = (id) => {
    console.log(id);
    confirm({
      title: "Do you Want to delete this Student?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        dispatch(deleteStudentAction(id));
        axios.delete(ENDPOINT + "student/adm/delete/" + id, {
          headers: { Authorization: "Bearer " + token },
        });
        window.location.href = "/admin";
      },
    });
  };
  const editstudent = (id) => {
    showModal();
    setSelectedStudent(id);
    console.log(id);
    axios.get(ENDPOINT + "student/free/get/" + id).then((res) => {
      console.log(res.data);
      studentForm.setFieldsValue(res.data);
      setDataUpdate(id);
    });
    // let Student = data.find((t) => t.id === id);
    // studentForms.setFieldsValue(Student);
  };
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem(TOKEN);
    axios
      .get(ENDPOINT + "student/free/getAll", {
        headers: { Authorization: "Bearer " + token },
      })

      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>O'quvchilar jadvali</h1>
            <Button onClick={openFormModal} type="primary">
              Add Student
            </Button>
          </div>
        )}
        columns={columns}
        loading={loading}
        dataSource={data}
      />
      <Modal
        title="O'qituvchi ma'lumotlari"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selectedStudent ? "Save" : "Add"}
      >
        <Form
          form={studentForm}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            field: "ReactJs",
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="FullName" />
          </Form.Item>
          <Form.Item name="radiogroup" label="Radio.Group">
            <Radio.Group name="radiogroup">
              <Radio value="1-Sinf">1-Sinf</Radio>
              <Radio value="2-Sinf">2-Sinf</Radio>
              <Radio value="3-Sinf">3-Sinf</Radio>
              <Radio value="4-Sinf">4-Sinf</Radio>
            </Radio.Group>
          </Form.Item>
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
          <Form.Item
            label="Maktab"
            name="maktab"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Maktab" />
          </Form.Item>
          <Form.Item
            label="Tuman"
            name="tuman"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Tuman" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Admin;
