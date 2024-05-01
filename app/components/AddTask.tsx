"use client"

import React, { FormEventHandler, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import Modal from './Modal';
import { addTodo } from '@/api';
import { v4 as uuidv4 } from 'uuid';


function AddTask() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [todoValue, setTodoValue] = useState<string>('');

    const handleAddTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await addTodo({
            id: uuidv4(),
            name: todoValue
        })
        console.log(todoValue)
        setShowModal(false)
    }

    return (
        <div className='my-[20px]'>
            <button onClick={() => setShowModal(true)} className="btn btn-info w-[300px]">Add new Task <CiCirclePlus size={20} /></button>

            <Modal showModal={showModal} setShowModal={setShowModal}>

                <form onSubmit={handleAddTodo}>
                    <div>
                        <h1 className=' text-center'>Add new task</h1>
                        <div className='flex gap-2 justify-center mt-4'>
                            <input name={todoValue} onChange={(e) => setTodoValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>

            </Modal>
        </div>
    )
}

export default AddTask