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

    console.log(addTodo, removeTodo)

    const [title, setTitle] = useState('')

    return (
        <div className={'w-full h-2/3 bg-fuchsia-200 border-1'}>
            <div className={'m-2 p-2 h-1/5 flex justify-center items-center'}>
                <input
                    type={'text'}
                    className={'w-2/4 bg-white p-2 h-10'}
                    value={title}
                    onChange={ e => { setTitle(e.target.value)}}
                />

                <button
                    className={'p-2 border-1'}
                    onClick={ () => {
                        addTodo(title)
                    }}
                >SAVE</button>
            </div>
            <div>
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default TodoContainer;