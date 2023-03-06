import React, { useState } from 'react';
import "./App.css";
import RenderExpense from "./components/expenses/RenderExpense";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY = [
  { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 2, 28) },
  { id: 2, title: "Concert", amount: 20, date: new Date(2023, 2, 28) },
  { id: 3, title: "Gas", amount: 30, date: new Date(2023, 2, 28) },
  { id: 4, title: "Insurance", amount: 100, date: new Date(2023, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => { //cleanway to update
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <RenderExpense item={expenses} /> 
    </div>
  );
}

export default App;
