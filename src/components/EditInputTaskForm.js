import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

function EditInputTaskForm({
  editOpenModel,
  closeEditModel,
  submitData,
  editedTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueDateStr, setDueDateStr] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("");
  const [updatedTaskName, setUpdatedTaskName] = useState({});

  useEffect(() => {
    setUpdatedTaskName({
      title: editedTask?.title,
      description: editedTask?.decription,
      dueDate: editedTask?.dueDate,
      tags: editedTask?.tags,
      status: editedTask?.status,
    });
    setTitle(editedTask?.title);
    setDescription(editedTask?.decription);
    setTags(editedTask?.tags);
    // setStatus(editedTask?.status);
  }, [editedTask]);

  ///////////////INPUT TITLE///////////////
  function inputTitleHandler(event) {
    setTitle(event.target.value);
  }

  ///////////////INPUT DESCRIPTION//////////////
  function inputDescriptionHandler(event) {
    setDescription(event.target.value);
  }

  ///////////////INPUT TAGS//////////////////
  function inputTagHandler(event) {
    setTags(event.target.value);
  }

  ///////////////INPUT DUE DATE///////////////
  function inputDueDateHandler(value, dateString) {
    setDueDate(value);
    setDueDateStr(dateString);
  }

  ///////////////INPUT STATUS/////////////////
  function inputStatusHandler(value) {
    setStatus(value);
  }

  ///////////////SUBMIT HANDLER/////////////////
  function submitHandler() {
    // const current = new Date();
    // const date = `${current.getDate()}-${
    //   current.getMonth() + 1
    // }-${current.getFullYear()}`;

    const taskData = {
      title: title,
      description: description,
      createdOn: editedTask.createdOn,
      dueDate: dueDateStr,
      tags: tags,
      id: editedTask.id,
      status: status,
    };
    submitData(taskData);
    setTitle();
    setDescription();
    setDueDate();
    setTags();
    closeEditModel(false);
  }

  ////////////////RETURN//////////////////////
  return (
    <Modal
      title="Update the current Task"
      open={editOpenModel}
      onCancel={() => closeEditModel(false)}
      okText="Update"
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
            // value={status}
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

export default EditInputTaskForm;
