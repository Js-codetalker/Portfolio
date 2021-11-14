import { Modal as MantineModal } from "@mantine/core";
import React, { useState } from "react";
import { Times } from "..";
import { AppContext } from "@components/common";
interface ModalProps {
  bodyClasses?: string;
  modalClasses?: string;
  centerOnScreen?: boolean;
  modalWidth?: number;
}
const useModal = (): [() => void, React.FC<ModalProps>] => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = () => {
    setIsOpened((prev) => !prev);
  };
  const Modal: React.FC<ModalProps> = ({
    children,
    bodyClasses,
    modalClasses,
    centerOnScreen = true,
    modalWidth = "full",
  }) => {
    return (
      <AppContext.Consumer>
        {({ darkMode }) => (
          <MantineModal
            opened={isOpened}
            onClose={toggleModal}
            hideCloseButton
            classNames={{
              modal: `w-${modalWidth} rounded-none p-0 ${modalClasses}`,
              inner: centerOnScreen ? "flex-center" : "",
              body: `relative w-full m-0 dark:bg-black dark:text-white ${bodyClasses}`,
              root: darkMode ? "dark" : "",
            }}
          >
            <button
              className="absolute -top-50 right-0 w-40 h-40 z-50"
              onClick={toggleModal}
            >
              <Times className="stroke-white" />
            </button>
            {children}
          </MantineModal>
        )}
      </AppContext.Consumer>
    );
  };
  return [toggleModal, Modal];
};

export default useModal;
