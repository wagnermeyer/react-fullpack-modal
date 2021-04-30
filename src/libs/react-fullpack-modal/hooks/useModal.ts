import { useContext, useState, ReactElement, CSSProperties } from 'react'
import {ModalContext} from '../contexts/ModalContext'

export const useModal = () => {

  const { open, close } = useContext(ModalContext)
  const [instanceUuid] = useState(Math.random().toString(36).substring(7))

  const openModal = (ComponentToBeRendered: ReactElement, options?: { style: CSSProperties }) => open(instanceUuid, ComponentToBeRendered, options)
  const closeModal = () => close(instanceUuid)

  return [
    openModal,
    closeModal
  ]
}