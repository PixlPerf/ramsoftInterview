import { useEffect, useState } from "react";
import { TASK_LIST } from "../constants/data-constants";

const DashboardPage = () => {
  const [isKanbanBoard, setKanbanBoard] = useState(true);
  const isDirty = false;

  const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   let taskListFromStorage = localStorage.getItem(TASK_LIST) || "[]";
  //   setTaskList(JSON.parse(taskListFromStorage));
  // }, []);

  // useEffect(() => {
  //   if (isDirty) localStorage.setItem(TASK_LIST, JSON.stringify(taskList));
  // }, [taskList, isDirty]);

  return (
    <div>
      <div>DASHBOARD</div>
      <div>
        <div
          // style={{ color: isKanbanBoard ? "blue" : "unset" }}
          onClick={setKanbanBoard(true)}
        >
          Kanban
        </div>
        |
        <div
          // style={{ color: isKanbanBoard ? "unset" : "blue" }}
          onClick={setKanbanBoard(false)}
        >
          List
        </div>
      </div>

      {isKanbanBoard ? <div>Kanban</div> : <div>List</div>}
    </div>
  );
};

export default DashboardPage;
