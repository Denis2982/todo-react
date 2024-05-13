import React from "react";
import CheckBox from "./CheckBox";
import cl from "classnames";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 w-full p-5">
      <button
        className="flex items-center"
        onClick={() => changeTodo(todo._id)}
      >
        <CheckBox isCompleted={todo.isCompleted} />
        <span
          className={cl({
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)} >
        <FaRegTrashCan
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
