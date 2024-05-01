"use client"

import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import Modal from './Modal';


function AddTask() {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <div className='my-[20px]'>
            <button onClick={() => setShowModal(true)} className="btn btn-info w-[300px]">Add new Task <CiCirclePlus size={20} /></button>

            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    Hii
                </div>
            </Modal>
        </div>
    )
}

export default AddTask