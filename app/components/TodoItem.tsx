
"use client"

import { ITodo } from '@/types/tasks'
import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, updateTodo } from '@/api';


function TodoItem({ item }: { item: ITodo }) {
    const router = useRouter()
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [editTodoValue, setEditTodoValue] = useState<string>(item.name);

    const handleEditTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await updateTodo({
            id: item.id,
            name: editTodoValue
        })
        router.refresh()
        // setEditTodoValue('')
        setShowEditModal(false)
    }

    const handleDeleteTodo = async (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        await deleteTodo(id);
        setShowDeleteModal(false);
        router.refresh();
    };
    return (
        <>  <tr key={item.id}>
            <td className='w-full'>{item.name}</td>
            <td className='flex gap-2 justify-center items-center'>
                <FiEdit onClick={() => setShowEditModal(true)} className='w-5 h-5 cursor-pointer' />
                <Modal showModal={showEditModal} setShowModal={setShowEditModal}>

                    <form onSubmit={handleEditTodo}>
                        <div>
                            <h1 className=' text-center'>Edit todo</h1>
                            <div className='flex gap-2 justify-center mt-4'>
                                <input value={editTodoValue} onChange={(e) => setEditTodoValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </form>

                </Modal>
                <MdDeleteOutline onClick={() => setShowDeleteModal(true)} className='w-6 h-6 cursor-pointer' />
                <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
                    <form onSubmit={(e) => handleDeleteTodo(e, item.id)}>
                        <div className='mt-4'>
                            <h1 className=' text-center'>Are you sure you want to delete {item.name}?</h1>
                            <div className='w-full flex justify-end mt-2'>
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </td>
        </tr></>
    )
}

export default TodoItem