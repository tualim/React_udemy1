import React, { useState } from "react";
import "./RenderExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const RenderExpense = (props) => {
  const [filteredYear, setFilterYear] = useState("2023");

  const dataSelected = (selectedExpense) => {
    setFilterYear(selectedExpense);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} selectData={dataSelected} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
    );
};

export default RenderExpense;
