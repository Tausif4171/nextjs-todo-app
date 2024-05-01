
export type ModalProps = {
    showModal: boolean,
    setShowModal: (showModal: boolean) => boolean | void,
    children: React.ReactNode,
}