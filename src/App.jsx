import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InpuTtodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incopleteTodo, setIncompleteTodo] = useState([]);
  const [copleteTodo, setCompleteTodo] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incopleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incopleteTodo];
    newTodo.splice(index, 1); //splice(ある番号、　削除する数)
    setIncompleteTodo(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incopleteTodo];
    newIncompleteTodo.splice(index, 1); //splice(ある番号、　削除する数)

    const newcompleteTodo = [...copleteTodo, incopleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newcompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...copleteTodo];
    newCompleteTodo.splice(index, 1);

    const backTodo = [...incopleteTodo, copleteTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(backTodo);
  };

  //map等で繰り返す場合はkeyの値を設定しないとだめ
  //onClickDelete(index)と書くと読み込んだ時に実行されてしまう為、() => onClickDelete(index)と記載する必要がある
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incopleteTodo.length >= 5}
      />
      {incopleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>登録できる数は5まで</p>
      )}
      <IncompleteTodo
        Todo={incopleteTodo}
        Delete={onClickDelete}
        Complete={onClickComplete}
      />
      <CompleteTodo Todo={copleteTodo} Back={onClickBack} />
    </>
  );
};
