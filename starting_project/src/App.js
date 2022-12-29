import React, { useState } from "react";
import FormResult from "./FormResult";
import UserForm from "./UserForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const gettingData = (arr) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, { name: arr.name, age: arr.age}];
    });
  };
  return (
    <div>
      <UserForm onAddUser={gettingData} />
      <FormResult expenseData={expenses} />
    </div>
  );
}

export default App;
