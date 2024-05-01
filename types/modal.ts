import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
}