import React from 'react'
import { useModal } from '../../libs/react-fullpack-modal'
import { ModalExample2 } from "../ModalExample2/ModalExample2";

const ModalExample1 = () => {

  const [openModal, closeModal] = useModal()

  return (
    <div className="modal modal-example-1">
      <button className="modal-close-button">Close modal example #1</button>
      <div className="modal-content">Lorem ipsum</div>
      <button onClick={() => openModal(<ModalExample2/>)} className="modal-open-button">Open modal example #2</button>
    </div>
  )
}

export { ModalExample1 }