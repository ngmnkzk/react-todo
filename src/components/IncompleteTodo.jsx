import React from "react";

export const IncompleteTodo = (props) => {
  const { Todo, Delete, Complete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {Todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>
                {todo}
                <button onClick={() => Complete(index)}>完了</button>
                <button onClick={() => Delete(index)}>削除</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
