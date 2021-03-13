import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import RetrivedTodos from "./../components/RetrivedTodos";
import TodoForm from "./../components/TodoForm";
import fire from "./../fire";

function Home() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const previousTodos = todos;
    fire
      .database()
      .ref("todos")
      .on("child_added", (snap) => {
        previousTodos.push({
          id: snap.key,
          title: snap.val().title,
          completed: false,
        });
        settodos(previousTodos);
      });
    fire
      .database()
      .ref("todos")
      .on("child_removed", (snap) => {
        for (var i = 0; i < previousTodos.length; i++) {
          if (previousTodos[i].id === snap.key) {
            previousTodos.splice(i, 1);
          }
        }
        settodos(previousTodos);
      });
  }, [todos]);

  const markComplete = (id) => {
    settodos(
      todos.map((newTodos) => {
        if (newTodos.id === id) {
          newTodos.completed = !newTodos.completed;
        }
        return newTodos;
      })
    );
  };

  const deleteTodo = (id) => {
    fire.database().ref("todos").child(id).remove();
  };

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Math.random(),
    //   title,
    //   completed: false
    // }
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // })

    // firebase
    fire.database().ref("todos").push().set({ title: title });
  };

  return (
    <div className="Home">
      <Header />
      <div className="todo-box">
        <RetrivedTodos
          todos={todos}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Home;
