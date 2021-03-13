import React from "react";
import TodosItem from "./TodosItem";

function RetrivedTodos(props) {
  return props.todos.map((mytodos) => (
    <TodosItem
      mytodos={mytodos}
      key={mytodos.id}
      markComplete={props.markComplete}
      deleteTodo={props.deleteTodo}
    />
  ));
}

export default RetrivedTodos;
