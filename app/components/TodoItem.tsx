import { ITodo } from '@/types/tasks'
import React from 'react'

function TodoItem({ item }: { item: ITodo }) {
    return (
        <>  <tr key={item.id}>
            <td>{item.name}</td>
            <td>Blue</td>
        </tr></>
    )
}

export default TodoItem