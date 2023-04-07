import { useState } from "react";
import CreateTask from "./components/CreateTask";
import TaskInputForm from "./components/TaskInputForm";
import TodoTable from "./components/TodoTable";
import EditInputTaskForm from "./components/EditInputTaskForm";
import SearchBar from "./components/SearchBar";
import { Space } from "antd";
import Sort from "./components/Sort";

function App() {
  const [openModel, setOpenModel] = useState();
  const [taskData, setTaskData] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [editOpenModel, setEditOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState();

  function openModelHandler(value) {
    setOpenModel(() => value);
    // console.log("app = " + value);
  }

  function closeModelHandler(value) {
    setOpenModel(() => value);
    // console.log("app = " + value);
  }

  function taskDataHandler(value) {
    setTaskData((pre) => [
      ...pre,
      {
        title: value.title,
        description: value.description,
        createdOn: value.createdOn,
        dueDate: value.dueDate,
        tags: value.tags,
        id: value.id,
        status: value.status,
      },
    ]);
  }
  // console.log(taskData);

  ///////////////DELETE FUNCTION////////////////
  function deleteButtonHandler(id) {
    setTaskData((oldValues) => {
      return oldValues.filter((item) => item.id !== id);
    });
  }

  //////////////////EDIT FUNCTION//////////////////
  function taskUpdateHandler(task) {
    setTaskData((prevTask) =>
      prevTask.map((t) =>
        t.id === task.id
          ? {
              ...t,
              title: task.title,
              description: task.description,
              dueDate: task.dueDate,
              tags: task.tags,
              status: task.status,
            }
          : t
      )
    );
    // setEditOpenModel(false);
  }

  function closeEditModel(value) {
    setEditOpenModel(() => value);
  }

  function enterEditMode(task) {
    setEditedTask(task);
    setEditOpenModel(true);
  }

  ///////////////ON SEARCH///////////////////
  function onSearchHandler(query) {
    setSearchQuery(query);
  }

  //////////////SORT///////////////////////
  function sortHandler(item) {
    setSort(item);
  }
  // console.log("item = " + sort);

  ////////////////RETURN//////////////////////
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <EditInputTaskForm
        editOpenModel={editOpenModel}
        closeEditModel={closeEditModel}
        editedTask={editedTask}
        submitData={taskUpdateHandler}
      />
      <TaskInputForm
        openModel={openModel}
        closeModel={closeModelHandler}
        submitData={taskDataHandler}
        editedTask={editedTask}
        // updateTask={updateTask}
      />
      <CreateTask onClick={openModelHandler} />
      <Space
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <SearchBar onSearch={onSearchHandler} />
        <Sort sortHandler={sortHandler} />
      </Space>
      <TodoTable
        taskData={taskData}
        onDeleteClick={deleteButtonHandler}
        onEditClick={enterEditMode}
        onSearch={searchQuery}
        sort={sort}
      />
    </Space>
  );
}

export default App;
