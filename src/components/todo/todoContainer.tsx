import {useState} from "react";

import { v4 as uuidv4 } from 'uuid';

function TodoContainer() {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (title:string) => {

        const obj = {tid: uuidv4() , title:title}

        setTodos([...todos, obj])
    }

    const removeTodo = (tid:string) => {

        const filteredResult =
            todos.filter( todo => todo.tid !== tid)

        setTodos(filteredResult)
    }


    return (
        <div></div>
    );
}

export default TodoContainer;