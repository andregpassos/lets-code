import styles from "./styles.module.scss";
import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "500px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px 40px",
    background: "#e5e5e5",
  },
};

export default function ModalComponent() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#203047";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={styles.btnModal} onClick={openModal}>
        Nova transação
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Nova transação</h2>
          <button className={styles.btnCloseModal} onClick={closeModal}>
            X
          </button>
        </div>
        <p>Preencha os campos</p>
        <form className={styles.formTransaction} id="formTransaction">
          <input id="title" placeholder="Título" />
          <input id="price" placeholder="Preço" />
          <input id="category" placeholder="Categoria" />
          <input
            id="date"
            style={{ marginBottom: "10px" }}
            placeholder="Data"
          />
          <button
            type="submit"
            form="formTransaction"
            className={styles.btnInserir}
            onClick={closeModal}
          >
            Adicionar
          </button>
        </form>
      </Modal>
    </div>
  );
}
