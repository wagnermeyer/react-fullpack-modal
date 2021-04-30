import React from 'react'

const ModalExample2 = ({ onCloseButtonClick }: { onCloseButtonClick?: () => void }) => {
  return (
    <div className="modal modal-example-1">
      <button onClick={ onCloseButtonClick } className="modal-close-button">Close modal example #2</button>
      <div className="modal-content">Lorem ipsum</div>
    </div>
  )
}

export { ModalExample2 }