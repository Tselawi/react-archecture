import React from "react";

const AddTodo = ({setTodos}) => {
    const inputRef = React.useRef();
    return (
        <form onSubmit={handelAddTodo}>
            <input name="addtodo" placeholder="add todo list" />
            <button type="submit">submit</button>
        </form>
    );
    function handelAddTodo(event) {
        event.preventDefault();
        // console.log(event.target.elements.addtodo.value);
        const text = event.target.elements.addtodo.value;
        const todo = {id: 5, text, done: false};
        setTodos((prevtodos) => {
            return prevtodos.concat(todo);
        });
        inputRef.current.value = "";
    }
};

export default AddTodo;
