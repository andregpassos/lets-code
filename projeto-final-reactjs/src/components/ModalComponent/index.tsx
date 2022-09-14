import styles from "./styles.module.scss";
import Modal from "react-modal";
import React, { useState } from "react";
import { customStyles } from "./utils";

export default function ModalComponent() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

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

  function saveData() {
    const ul = document.getElementById("transactionList");
    const li = document.createElement("li");

    //transaction
    const titleTr = document.createElement("p");
    const priceTr = document.createElement("p");
    const categoryTr = document.createElement("p");
    const dateTr = document.createElement("p");
    ////data
    titleTr.textContent = title;
    priceTr.textContent = price;
    categoryTr.textContent = category;
    //////fix toLocaleDateString
    let dataCorreta = new Date(date);
    dataCorreta.setDate(dataCorreta.getDate() + 1);
    //////set date
    dateTr.textContent = dataCorreta.toLocaleDateString();
    ////style
    titleTr.style.width = "300px";
    priceTr.style.width = "150px";
    categoryTr.style.width = "150px";
    dateTr.style.width = "90px";

    ul?.appendChild(li);
    li.appendChild(titleTr);
    li.appendChild(priceTr);
    li.appendChild(categoryTr);
    li.appendChild(dateTr);

    closeModal();
  }

  Modal.setAppElement("#root");

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
        <div className={styles.divTransaction}>
          <input
            id="title"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            id="price"
            type="number"
            placeholder="Preço"
            onChange={(e) => setPrice(`R$ ${e.target.value}`)}
          />
          <input
            id="category"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            id="date"
            type="date"
            style={{ marginBottom: "10px" }}
            placeholder="Data"
            onChange={(e) => setDate(e.target.value)}
          />
          <button className={styles.btnInserir} onClick={saveData}>
            Adicionar
          </button>
        </div>
      </Modal>
    </div>
  );
}
