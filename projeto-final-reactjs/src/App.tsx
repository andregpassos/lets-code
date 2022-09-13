import styles from "./App.module.scss";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";

import ModalComponent from "./components/ModalComponent";

// export interface ITransaction {
//   title: string;
//   price: string;
//   category: string;
//   date: Date;
// }

// const form: any = document.getElementById("formTransaction");

// function serializeForm() {
//   const objeto: any = {};
//   const formData = new FormData(form);

//   for (const key of formData.keys()) {
//     objeto[key] = formData.get(key);
//   }

//   return objeto;
// }

// form!.addEventListener("submit", () => {
//   const data = serializeForm();
//   console.log(data);
// });

// export function AddTransaction() {
//   const ul = document.getElementById("transactionList");
//   const li = document.createElement("li");
// }

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
