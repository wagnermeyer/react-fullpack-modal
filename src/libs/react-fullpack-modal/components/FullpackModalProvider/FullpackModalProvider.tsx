import React, { useState, useEffect, useCallback } from "react";
import { TFullpackModalProvider } from "../../types/types";
import { ModalContext } from "../../contexts/ModalContext";

const FullpackModalProvider: React.FunctionComponent<TFullpackModalProvider> = (
  props
): React.ReactElement => {
  const [stack, setStack] = useState<
    { uuid: string; ComponentToBeRendered: () => React.ReactElement; options?: { style: React.CSSProperties } }[]
  >([]);

  const starterZIndex = 10;

  const close = useCallback(
    (uuid: string) => {
      const indexToRemove = stack.findIndex((modal) => modal.uuid === uuid);
      stack.splice(indexToRemove, 1);
      setStack([...stack]);
    },
    [stack]
  );

  const closeByKey = useCallback(
    (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        const lastStackItem = stack[stack.length - 1];
        close(lastStackItem?.uuid);
      }
    },
    [close, stack]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeByKey, false);
    return () => {
      document.removeEventListener("keydown", closeByKey, false);
    };
  }, [closeByKey, stack]);

  const open = (uuid: string, ComponentToBeRendered: React.ReactElement, options?: { style: React.CSSProperties }) => {
    const isAlreadyOpened = !!stack.find((modal) => modal.uuid === uuid);
    if (!isAlreadyOpened) {
      setStack((prevStack) => [
        ...prevStack,
        {
          uuid,
          ComponentToBeRendered: () => ComponentToBeRendered,
          options
        },
      ]);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      {props.children}
      <div id="fullpack-modal-container">
        {stack.map(({ uuid, ComponentToBeRendered, options }, stackIndex) => {
          const index = (starterZIndex + stackIndex) + 1
          return(
          <React.Fragment key={uuid}>
            <div
              className="fullpack-modal-wrapper"
              style={{ zIndex: index + index + 1, position: 'absolute', ...options?.style }}
            >
              <ComponentToBeRendered />
            </div>
            <div
              style={{ zIndex: index + index }}
              onClick={() => close(uuid)}
              className="modal-bg"
            ></div>
          </React.Fragment>
        )})}
      </div>
    </ModalContext.Provider>
  );
};

export { FullpackModalProvider };
