import { DownOutlined } from "@ant-design/icons";
import { Table, Button, Space, Dropdown, Select, Tag } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";

const data = [
  {
    title: "Read a book",
    decription:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    createdOn: "10-Apr-2023",
    dueDate: "12-Apr-2023",
    tags: "#work #do #task",
    status: "Open",
  },
];

function TodoTable({ taskData, onDeleteClick, onEditClick, onSearch, sort }) {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let list = taskData.filter((query) =>
      query.title.toLowerCase().includes(onSearch)
    );
    if (sort) {
      list.sort((a, b) => (a.title > b.title ? 1 : -1));
    }

    list.map((item) => ({
      key: item.id,
      id: item.id,
      title: item.title,
      decription: item.description,
      createdOn: item.createdOn,
      dueDate: item.dueDate,
      tags: item.tags,
      status: item.status,
    }));
    setDataSource(list);
  }, [taskData, onSearch, sort]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "decription",
      key: "description",
      width: "400px",
    },
    {
      title: "Created on",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Due Date",
      key: "dueDate",
      dataIndex: "dueDate",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      width: "200px",
    },
    {
      dataIndex: "status",
      key: "status",
      title: "Status",
      render: (_, { status }) => (
        <>
          <Tag
            style={{
              border: "1px solid #b7e992",
              backgroundColor: "#f3fbeb",
              color: "#57ab30",
            }}
            key={status}
          >
            {status.toUpperCase()}
          </Tag>
        </>
      ),
      // style={{ border: "1px solid green" }},
    },
    {
      render: (dataSource) => (
        <Space size="middle">
          <Button
            type="primary"
            size="small"
            onClick={(e) => onEditClick(dataSource)}
          >
            Edit
          </Button>
          <Button size="small" onClick={() => onDeleteClick(dataSource.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default TodoTable;
