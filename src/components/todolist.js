import React from "react";
import AddTodo from "./addtodo";
import DeleteTodo from "./deletetodo";

const TodoList = () => {
    const [todos, setTodos] = React.useState([
        {id: 1, text: "wash dishes", done: false},
        {id: 2, text: "do laundry", done: false},
        {id: 3, text: "take a shower", done: false},
        {id: 4, text: "sing a song", done: false},
    ]);
    return (
        <div className="todo">
            <h2>TodoList</h2>
            <ListTodo todos={todos} setTodos={setTodos} />
            <AddTodo setTodos={setTodos} />
        </div>
    );

    function ListTodo({todos, setTodos}) {
        function handleToggelTodo(todo) {
            const updatedTodo = todos.map((t) =>
                t.id === todo.id
                    ? {
                          ...t,
                          done: !t.done,
                      }
                    : t,
            );
            setTodos(updatedTodo);
        }

        return (
            <ul>
                {todos.map((todo, setTodo) => (
                    <li
                        onDoubleClick={() => handleToggelTodo(todo)}
                        style={{
                            textDecoration: todo.done ? "line-through" : "",
                        }}
                        key={todo.id}>
                        {todo.text}
                        <DeleteTodo todo={todo} setTodos={setTodos} />
                    </li>
                ))}
            </ul>
        );
    }
};
export default TodoList;
