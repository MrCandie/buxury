import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = ({ hide }) => {
  return <div onClick={hide} className="backdrop" />;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className="overlay-modal">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ hide, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideCart={hide} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
