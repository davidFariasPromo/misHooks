import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";




const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}



export const useTodo = () => {

    const [todos, todosAction] = useReducer(todoReducer , [], init);


    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);



    const onNewTodo = (todo) =>{
        
        const action = {
            type: 'Add todo',
            payload: todo
        }

        todosAction(action);
    }


    const handleDeleteTodo = (todo) =>{


        todosAction({
            type: 'DELETE todo',
            payload: todo
        })

    }



    const handleMarkTodo = (todo) => {

        todosAction({
            type: 'ONTOGGLE todo',
            payload: todo
        })
    }

    const allTodos = () => {
        return todos.length;

    }

    const todosPending = () => {
        return todos.filter(todo => !todo.done).length;
    }





    return {
        todos,
        onNewTodo,
        handleDeleteTodo,
        handleMarkTodo,
        allTodos,
        todosPending,

    }
}