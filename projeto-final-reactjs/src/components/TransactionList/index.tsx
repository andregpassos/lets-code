import styles from "./styles.module.scss";

export default function TransactionList() {
  return (
    <div className={styles.containerTransactionList}>
      <div className={styles.legendaDiv}>
        <h1>Suas transações</h1>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Digite para filtrar..."
        />
      </div>
      <div className={styles.tableDiv}>
        <ul>
          <li style={{ background: "#e5e5e5" }}>
            <p className={styles.textLi}>Título</p>
            <p className={styles.textLi}>Preço</p>
            <p className={styles.textLi}>Categoria</p>
            <p className={styles.textLi}>Data</p>
          </li>
          <li>
            <p className={styles.textLi}>Desenvolvedor Web/Mobile</p>
            <p className={styles.textLi}>R$ 12.000,00</p>
            <p className={styles.textLi}>Salário</p>
            <p className={styles.textLi}>01/09/2022</p>
          </li>
          <li>
            <p className={styles.textLi}>Pizza</p>
            <p className={styles.textLi}>- R$ 59,00</p>
            <p className={styles.textLi}>Alimentação</p>
            <p className={styles.textLi}>03/09/2022</p>
          </li>
          <li></li>
        </ul>

        {/* <table>
          <thead className={styles.headerTable}>
            <tr>
              <td>Título</td>
              <td>Preço</td>
              <td>Categoria</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody className={styles.bodyTable}>
            <tr className={styles.rowBodyTable}>
              <td style={{ color: "black" }}>Desenvolvedor Web/Mobile</td>
              <td>R$ 12.000,00</td>
              <td>Salário</td>
              <td>01/09/2022</td>
            </tr>
            <tr className={styles.rowBodyTable}>
              <td style={{ color: "black" }}>Desenvolvedor Web/Mobile</td>
              <td>R$ 12.000,00</td>
              <td>Salário</td>
              <td>01/09/2022</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
