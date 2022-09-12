import styles from "./styles.module.scss";

export default function SummaryCard() {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.cardDiv}>
        <p className={styles.textCards}>Entradas</p>
        <h1 className={styles.textCards}>R$ 17.400,00</h1>
      </div>
      <div className={styles.cardDiv} style={{ background: "#EB5757" }}>
        <p className={styles.textCards}>Saídas</p>
        <h1 className={styles.textCards}>R$ 1.259,00</h1>
      </div>
      <div className={styles.cardDiv} style={{ background: "#203047" }}>
        <p className={styles.textCards}>Total</p>
        <h1 className={styles.textCards}>R$ 16.141,00</h1>
      </div>
    </div>
  );
}
