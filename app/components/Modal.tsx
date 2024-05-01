import { ModalProps } from '@/types/modal'
import React from 'react'

function Modal({ showModal, setShowModal }: ModalProps) {
    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${showModal && 'modal-open'}`}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setShowModal(false)}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    )
}

export default Modal