import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /**
   * Handling multiple states using one object
   */

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: ""
  // });

  // const titleChangeHandler = (event) => {
  // // could be problematic due to slowness of app we might not get the
  // // correct state
  // //   setUserInput({ ...userInput, title: event.target.value });
  // // so use passing a function to function method
  // setUserInput((prevState) =>{
  //     return {...prevState, title: event.target.value}
  // })
  //   console.log(userInput);
  // };

  // const amountChangeHandler = (event) => {
  // //   setUserInput({ ...userInput, amount: event.target.value });
  // setUserInput((prevState) =>{
  //     return {...prevState, amount: event.target.value}
  //   console.log(userInput);
  // };

  // const dateSelectorHandler = (event) => {
  // //   setUserInput({ ...userInput, date: event.target.value });
  // setUserInput((prevState) =>{
  //     return {...prevState, date: event.target.value}
  //   console.log(userInput);
  // };

  /**
   * Handling multiple states using multiple objects
   */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };

  const dateSelectorHandler = (event) => {
    setSelectedDate(event.target.value);
    // console.log(selectedDate);
  };

  function submitHandler(event) {
    event.preventDefault(); // this will prevent browser to reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(selectedDate)
    };

    // using this to pass data from child to parent
    // here we are using the function passed down from parent
    // passing to NewExpense component
    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setSelectedDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // using this we will have two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={selectedDate}
            min="2014-01-01"
            max="2022-12-31"
            onChange={dateSelectorHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

/**
 * Classed based component
 */
// class ExpenseForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       amount: "",
//       date: ""
//     };
//   }

//   titleChangeHandler = (event) => {
//     this.setState({ title: event.target.value });
//     // console.log(this.state.title);
//   };

//   amountChangeHandler = (event) => {
//     this.setState({ amount: event.target.value });
//     // console.log(this.state.amount);
//   };

//   dateSelectorHandler = (event) => {
//     this.setState({ date: event.target.value });
//     // console.log(this.state.date);
//   };

//   submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: this.state.title,
//       amount: this.state.amount,
//       date: new Date(this.state.date)
//     };

//     console.log(expenseData);

//     this.setState({ title: "", amount: "", date: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.submitHandler}>
//         <div className="new-expense__controls">
//           <div className="new-expense__controls">
//             <label>Title</label>
//             <input
//               type="text"
//               value={this.state.title} // using this we will have two way binding
//               onChange={this.titleChangeHandler}
//             />
//           </div>
//           <div className="new-expense__controls">
//             <label>Amount</label>
//             <input
//               type="number"
//               value={this.state.amount}
//               min="0.01"
//               step="0.01"
//               onChange={this.amountChangeHandler}
//             />
//           </div>
//           <div className="new-expense__controls">
//             <label>Date</label>
//             <input
//               type="date"
//               value={this.state.date}
//               min="2014-01-01"
//               max="2022-12-31"
//               onChange={this.dateSelectorHandler}
//             />
//           </div>
//         </div>
//         <div className="new-expense__actions">
//           <button type="submit">Add Expense</button>
//         </div>
//       </form>
//     );
//   }
// }

export default ExpenseForm;
