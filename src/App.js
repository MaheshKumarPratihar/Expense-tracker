import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 6, 12),
    title: "House renovation",
    amount: 200000.0,
  },
  {
    id: "e2",
    date: new Date(2017, 10, 10),
    title: "New TV",
    amount: 1000.0,
  },
  {
    id: "e3",
    date: new Date(2020, 1, 1),
    title: "Car-Insurance",
    amount: 250.67,
  },
  {
    id: "e4",
    date: new Date(2019, 2, 10),
    title: "New Desk (Wooden)",
    amount: 99.0,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    // const expenseData = {
    //   ...enteredExpenseData,
    // };

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log("here at App saveExpenseDataHandler");
    // console.log(expenses);
  }

  return (
    <div className="app_color">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
