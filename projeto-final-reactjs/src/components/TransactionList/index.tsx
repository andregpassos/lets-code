import styles from "./styles.module.scss";

export default function TransactionList() {
  return (
    <div className={styles.containerTransactionList}>
      <div className={styles.legendaDiv}>
        <h1 style={{ fontSize: "30px" }}>Suas transações</h1>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Digite para filtrar..."
        />
      </div>
      <ul id="transactionList">
        <li style={{ background: "#e5e5e5", color: "black" }}>
          <p style={{ width: "300px" }}>Título</p>
          <p style={{ width: "150px" }}>Preço</p>
          <p style={{ width: "150px" }}>Categoria</p>
          <p style={{ width: "90px" }}>Data</p>
        </li>
        <li>
          <p style={{ width: "300px" }}>Desenvolvedor Web/Mobile</p>
          <p style={{ width: "150px" }}>R$ 12.000,00</p>
          <p style={{ width: "150px" }}>Salário</p>
          <p style={{ width: "90px" }}>01/09/2022</p>
        </li>
        <li>
          <p style={{ width: "300px" }}>Pizza</p>
          <p style={{ width: "150px" }}>- R$ 59,00</p>
          <p style={{ width: "150px" }}>Alimentação</p>
          <p style={{ width: "90px" }}>03/09/2022</p>
        </li>
      </ul>
    </div>
  );
}
