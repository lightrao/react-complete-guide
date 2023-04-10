import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

// manage state
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          // rendring list of data
          items.map((expense) => (
            <ExpenseItem
              key={
                expense.id
              } /* help React identify the individual items, unique IDs */
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
