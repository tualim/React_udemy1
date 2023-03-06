import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const editing = () => {
    setEditing(true);
  };

  const onCancel = () => {
    setEditing(false);
  };

  return (
    //got data from child using a pointer at a function (lifting state up)
    <div className="new-expense">
      {!isEditing && <button onClick={editing}>Add new Expenses</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
