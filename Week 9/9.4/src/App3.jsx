import React from "react";

export default function App3() {
  const todos = [
    {
      id: 0,
      title: "Go to gym",
      done: false,
    },
    {
      id: 1,
      title: "Eat food",
      done: true,
    },
  ];

  // each child in a list must have a unique 'key' prop
  // required even for optimizations - say elements of list are flipped - then react can calulate diff easier
  const todosComponents = todos.map((todo) => (
    <Todo key={todo.id} title={todo.title} done={todo.done} />
  ));
  console.log(todosComponents);

  return <div>
    {todosComponents}</div>;
}

function Todo({ title, done }) {
  return (
    <div style={{ display: "flex" }}>
      <h3>{title}</h3>
      <input type="checkbox" checked={done} />
    </div>
  );
}
