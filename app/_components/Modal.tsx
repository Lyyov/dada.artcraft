type TModal = {
  show: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};
const Modal = ({ show, closeModal, children }: TModal) => {
  return (
    <>
      <div className={show ? `modal show` : "modal"}>
        <div className="modal__header">
          {/* <div className="modal__title">
            {title}
          </div> */}
          <div onClick={closeModal} className="modal__close">
            &times;
          </div>
        </div>
        <div className="modal__body">{children}</div>
      </div>
      <div className="backdrop" onClick={closeModal}></div>
    </>
  );
};

export default Modal;
