import React from "react";
import { useModal } from '../../libs/react-fullpack-modal'
import { ModalExample2 } from "../ModalExample2/ModalExample2";

const Main = () => {

  const [openModal, closeModal] = useModal()

  return <>
    Main component <br/>
    <button onClick={() => openModal(<ModalExample2/>)}>Open modal</button>
  </>
};

export { Main };
