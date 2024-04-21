import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


function AddTask() {
    return (
        <div className='my-[20px]'>
            <button className="btn btn-info w-[300px]">Add new Task <CiCirclePlus size={20} /></button>
        </div>
    )
}

export default AddTask