import React, { useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild";
import { Todo } from "./models/models";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);
  const handleAdd = () => {};
  return (
    <div className="App">
      <span className="Heading">Todo With Type-Scrept</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
