import { Modal as MantineModal } from "@mantine/core";
import { useState } from "react";
interface ModalProps {
  className?: string;
  centerOnScreen?: boolean;
  modalWidth?: number
}
const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = () => {
    setIsOpened((prev) => !prev);
  };
  const Modal: React.FC<ModalProps> = ({
    children,
    className,
    centerOnScreen = true,
    modalWidth = 'full',
  }) => {
    return (
      <MantineModal
        opened={isOpened}
        onClose={toggleModal}
        hideCloseButton
        classNames={{
          modal: 'p-0',
          root: `w-${modalWidth}`,
          inner: centerOnScreen ? "flex-center" : "",
          body: `relative w-full ${className} m-0`,
        }}
      >
        {children}
      </MantineModal>
    );
  };
  return {
    toggleModal,
    Modal,
  };
};

export default useModal;
