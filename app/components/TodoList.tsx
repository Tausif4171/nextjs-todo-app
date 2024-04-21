import React from 'react'

function TodoList() {
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
                    <tr>
                        <th>1</th>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodoList