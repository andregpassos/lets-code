import styles from "./App.module.scss";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <Header />
      <div className={styles.containerPrincipal}>
        <SummaryCard />
        <TransactionList />
      </div>
    </>
  );
}

export default App;
