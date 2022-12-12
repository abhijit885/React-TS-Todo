import React, { useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild";
import TodoList from "./Components/TodoList";
import { Todo } from "./models/models";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoArray([
        ...todoArray,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="Heading">Todo With Type-Scrept</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
};

export default App;
