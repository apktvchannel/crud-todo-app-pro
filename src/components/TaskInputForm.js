import { useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

function TaskInputForm({ openModel, closeModel, submitData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueDateStr, setDueDateStr] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("");

  function inputTitleHandler(event) {
    setTitle(event.target.value);
  }

  function inputDescriptionHandler(event) {
    setDescription(event.target.value);
  }

  function inputTagHandler(event) {
    setTags(event.target.value);
  }

  function inputDueDateHandler(value, dateString) {
    // console.log("Selected Time: ", value);
    // console.log("Formatted Selected Time: ", dateString);
    setDueDate(value);
    setDueDateStr(dateString);
  }

  // console.log(dueDate);

  function inputStatusHandler(value) {
    setStatus(value);
  }
  // console.log(status);

  function submitHandler() {
    const current = new Date();
    const date = `${current.getDate()}-${
      current.getMonth() + 1
    }-${current.getFullYear()}`;

    const taskData = {
      title: title,
      description: description,
      createdOn: date,
      dueDate: dueDateStr,
      tags: tags,
      id: parseInt(Math.random() * 1000),
      status: status,
    };
    submitData(taskData);
    setTitle();
    setDescription();
    setDueDate();
    setTags();
    closeModel(false);
  }

  function updateTask() {}

  return (
    <Modal
      title="Create a New Task"
      open={openModel}
      onCancel={() => closeModel(false)}
      okText="Create"
      onOk={submitHandler}
    >
      <Form layout="vertical">
        {/* //////////////title/////////////// */}
        <FormItem label="Title">
          <Input
            placeholder="Add title"
            maxLength={100}
            value={title}
            onChange={inputTitleHandler}
          />
        </FormItem>

        {/* /////////////description////////// */}
        <FormItem label="Description">
          <TextArea
            type="textarea"
            placeholder="Add description"
            maxLength={1000}
            value={description}
            onChange={inputDescriptionHandler}
          />
        </FormItem>

        {/* /////////////due date//////////// */}
        <FormItem label="Due Date">
          <DatePicker
            value={dueDate}
            onChange={inputDueDateHandler}
            format="DD-MM-YYYY"
          />
        </FormItem>

        {/* /////////////////tags///////////// */}
        <FormItem label="Tags">
          <Input
            placeholder="Add tags"
            maxLength={50}
            value={tags}
            onChange={inputTagHandler}
          />
        </FormItem>

        {/* //////////////////Status//////////////// */}
        <FormItem label="Status">
          <Select
            placeholder="Select status"
            onChange={inputStatusHandler}
            allowClear
          >
            <Select.Option value="open">Open</Select.Option>
            <Select.Option value="working">Working</Select.Option>
            <Select.Option value="done">Done</Select.Option>
            <Select.Option value="overdue">Overdue</Select.Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  );
}

export default TaskInputForm;
