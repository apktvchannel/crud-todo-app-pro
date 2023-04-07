import { Button, Space, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function CreateTask({ onClick }) {
  const [taskData, setTaskData] = useState(null);

  // function onAddTask() {
  //     const newTask = {
  //   id: Math.random()*100,
  //   title: "Read a book",
  //   decription:
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  //   createdOn: "10-Apr-2023",
  //   dueDate: "12-Apr-2023",
  //   tags: "#work #do #task",
  //   status: "Open",
  // },
  //     setTaskData(pre => {
  //         return [...pre, newTask]
  //     })
  // }

  function openModelHandler() {
    const status = true;
    onClick(status);
  }

  return (
    <Space style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ margin: "0px", fontSize: "24px" }}>AlgoBulls Todo App</h1>

      <Button type="primary" size="large" onClick={openModelHandler}>
        Create a New Task <PlusOutlined />
      </Button>
    </Space>
  );
}

export default CreateTask;
