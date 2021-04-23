import React from "react";

const DeleteTodo = ({todo, setTodos}) => {
    function handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((t) => t.id !== todo.id);
            });
        }
    }
    return (
        <span
            onClick={() => handleDeleteTodo()}
            role="button"
            style={{
                color: "red",
                marginLeft: 10,
                fontWeight: "bold",
                cursor: "pointer",
            }}>
            X
        </span>
    );
};

export default DeleteTodo;
