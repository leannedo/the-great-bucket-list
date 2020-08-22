// Libraries
import React from "react";

// Styling
import "./InputCheckbox.scss";

// Hooks
import { useModal } from "../../../modules/modal/contexts/ModalContext";

const InputCheckbox = () => {
  const { showModal, categorySelectionModal } = useModal();

  return (
    <div
      onClick={() => showModal({ key: categorySelectionModal.key })}
      className="input-checkbox"
    />
  );
};

export default InputCheckbox;
