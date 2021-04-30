import { ReactElement, createContext, CSSProperties } from 'react';
const ModalContext = createContext({
  open: (instanceUuid: string, ComponentToBeRendered: ReactElement, options?: { style: CSSProperties }) => {},
  close: (instanceUuid: string) => {}
});

export { ModalContext }