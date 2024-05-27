import TodoItems from "./TodoItems";

function Items({todoItems, onDeleteClick}) {
  return (
    <div className="todo-items">
        {todoItems.map((item) => <TodoItems todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>)};
    </div>
  );
}

export default Items;
