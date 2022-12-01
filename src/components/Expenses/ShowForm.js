import React from "react";
class ShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredTitle: "",
      enteredAmount: "",
      selectedDate: "",
      showForm: true
    };
  }

  titleChangeHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
    console.log(this.state.enteredTitle);
  };

  amountChangeHandler = (event) => {
    this.setState({ enteredAmount: event.target.value });
  };

  dateSelectorHandler = (event) => {
    this.setState({ selectedDate: event.target.value });
  };

  submitHandler(event, state) {
    event.preventDefault(); // this will prevent browser to reload

    // const expenseData = {
    //   title: this.state.enteredTitle,
    //   amount: state.enteredAmount,
    //   date: new Date(state.selectedDate),
    //   showForm: false
    // };

    // console.log(expenseData);

    // using this to pass data from child to parent
    // here we are using the function passed down from parent
    // passing to NewExpense component
    this.props.onSaveExpenseData(this.state);

    console.log(this.state);

    this.setState({ enteredTitle: "" });
    this.setState({ enteredAmount: "" });
    this.setState({ selectedDate: "" });
    this.setState({ showForm: false });
  }

  hideFormHandler() {
    console.log(this.state.showForm);
    this.setState({ showForm: false });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={this.state.enteredTitle} // using this we will have two way binding
              onChange={this.titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              value={this.state.enteredAmount}
              min="0.01"
              step="0.01"
              onChange={this.amountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={this.state.selectedDate}
              min="2014-01-01"
              max="2022-12-31"
              onChange={this.dateSelectorHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="cancel" onClick={this.hideFormHandler}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ShowForm;
