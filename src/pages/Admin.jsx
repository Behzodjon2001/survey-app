import { Button, Form, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const columns = [
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "FullName",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Sinfi",
      key: "sinfi",
      dataIndex: "sinfi",
    },
    {
      title: "Telefon",
      key: "telefon",
      dataIndex: "telefon",
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
          {/* <Button type="primary" danger onClick={() => deletestudent(row.id)}>
            Delete
          </Button> */}
        </>
      ),
    },
  ];
  const [studentForm] = Form.useForm();
  const [setSelectedstudent] = useState(null);
  const { students } = useSelector((state) => state);
  // const dispatch = useDispatch();
  console.log(students);

  // const deletestudent = (id) => {
  //   confirm({
  //     title: "Do you Want to delete this student?",
  //     icon: <ExclamationCircleFilled />,
  //     onOk() {
  //       dispatch(deleteStudentAction(id));
  //     },
  //   });
  // };
  const editstudent = (id) => {
    setSelectedstudent(id);
    let student = students.find((t) => t.id === id);
    studentForm.setFieldsValue(student);
  };
  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>O'quvchilar jadvali</h1>
          </div>
        )}
        columns={columns}
        dataSource={students}
      />
    </>
  );
};

export default Admin;
