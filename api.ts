import { ITodo } from "./types/tasks";


// import ITodo from ''
const apiUrl = "http://localhost:3001"
export const getTodo = async () => {
    const res = await fetch(`${apiUrl}/tasks`, { cache: 'no-store' })
    const data = await res.json();
    return data;
}

export const addTodo = async (todo: ITodo) => {
    const res = await fetch(`${apiUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const data = await res.json();
    return data;
}

export const updateTodo = async (todo: ITodo) => {
    const res = await fetch(`${apiUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updateTodo = await res.json();
    return updateTodo;
}

export const deleteTodo = async (id: string) => {
    await fetch(`${apiUrl}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}
