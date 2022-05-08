import React from "react";

export const CompleteTodo = (props) => {
  const { Todo, Back } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {Todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>
                {todo}
                <button onClick={() => Back(index)}>戻す</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
