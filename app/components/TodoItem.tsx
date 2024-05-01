import { ITodo } from '@/types/tasks'
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";


function TodoItem({ item }: { item: ITodo }) {
    return (
        <>  <tr key={item.id}>
            <td className='w-full'>{item.name}</td>
            <td className='flex gap-2 justify-center items-center'>
                <FiEdit className='w-5 h-5 cursor-pointer' />
                <MdDeleteOutline className='w-6 h-6 cursor-pointer' />
            </td>
        </tr></>
    )
}

export default TodoItem