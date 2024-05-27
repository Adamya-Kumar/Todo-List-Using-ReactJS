import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ addNewItem }) {
  const [Todoname, setTodoName] = useState();
  const [TodoDueDate, setDueDate] = useState();

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const handleOnClckButton = () => {
    addNewItem(Todoname, TodoDueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            className={styles.inputfield}
            value={Todoname}
            placeholder="Enter Todo"
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.inputfield}
            value={TodoDueDate}
            placeholder="dd/mm/yyyy"
            onChange={handleDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnClckButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
