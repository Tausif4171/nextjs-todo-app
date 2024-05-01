import { ModalProps } from '@/types/modal'
import React from 'react'

function Modal({ showModal, setShowModal, children }: ModalProps) {
    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${showModal && 'modal-open'}`}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setShowModal(false)}>✕</button>
                    </form>
                    {children}
                </div>
            </dialog>
        </div>
    )
}

export default Modal