import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const init = [
    {
      name: "Buy Milk",
      dueDate: "14/03/2023",
    },
    {
      name: "Go to College",
      dueDate: "14/03/2023",
    },
    {
      name: "Like This",
      dueDate: "right Now",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);
  const handlerAddNewItem = (newItemName, newDueDate) => {
    const newTodoItem = [
      ...todoItems,
      {
        name: newItemName,
        dueDate: newDueDate,
      },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (deleteItemName) => {
    const newstate = todoItems.filter((item) => item.name !== deleteItemName);
    setTodoItems(newstate);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addNewItem={handlerAddNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <Items todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
