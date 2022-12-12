import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../models/models";
import "./styles.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";
type Props = {
  val: Todo;
  todoArray: Todo[];
  setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo: React.FC<Props> = ({ val, todoArray, setTodoArray }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(val.todo);

  const handleDelete = (id: number) => {
    setTodoArray(todoArray.filter((val) => val.id !== id));
  };

  const handleDone = (id: number) => {
    setTodoArray(
      todoArray.map((val) =>
        val.id === id
          ? {
              ...val,
              isDone: !val.isDone,
            }
          : val
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoArray(
      todoArray.map((val) =>
        val.id === id
          ? {
              ...val,
              val: editTodo,
            }
          : val
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, val.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : val.isDone ? (
        <s className="todos__single--text">{val.todo}</s>
      ) : (
        <span className="todos__single--text">{val.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !val.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(val.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(val.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
