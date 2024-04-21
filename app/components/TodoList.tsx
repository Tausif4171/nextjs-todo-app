import getTodo from '@/api'
import { ITodo } from '@/types/tasks';
import React from 'react'

async function TodoList() {
    const data = await getTodo();
    console.log(data)
    return (
        <div className=" w-[600px]">
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: ITodo) => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <th>{item.name}</th>
                                    <td>Blue</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList