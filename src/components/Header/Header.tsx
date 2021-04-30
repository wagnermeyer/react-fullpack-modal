import React from "react";
import { useModal } from '../../libs/react-fullpack-modal'
import { ModalExample1 } from '../ModalExample1/ModalExample1'

const Header = (props: { random: number }) => {
  const [openModal, closeModal] = useModal()

  return <>
    Header component {props.random}<br/>
    <button onClick={() => openModal(<ModalExample1/>)}>Open modal from header</button>
    -----
  </>
};

export { Header };
