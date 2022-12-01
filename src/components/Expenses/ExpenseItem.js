import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState --> it returns first value as the pointer to passed variable
  // and second value is a function which we can use to set value.
  const [title, setTitle] = useState(props.title);

  // function clickHandler() {}

  const clickHandler = () => {
    setTitle("Updated !!");
    console.log(title);
  };

  return (
    <ul>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </ul>
  );
};

// class ExpenseItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: props.title, date: props.date, amount: props.amount };
//   }

//   clickHandler = () => {
//     this.setState({ title: "updated" });
//   };

//   render() {
//     return (
//       <div className="expense-item">
//         <ExpenseDate date={this.state.date}></ExpenseDate>
//         <div className="expense-item__description">
//           <h2>{this.state.title}</h2>
//           <div className="expense-item__price">${this.state.amount}</div>
//         </div>
//         <button type="button" onClick={this.clickHandler}>Change title</button>
//       </div>
//     );
//   }
// }

export default ExpenseItem;
