import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Buttons";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expanse-tracker/exponents/ExpenseList";
import ExpenseFilter from "./expanse-tracker/exponents/ExpenseFilter";
function App() {
  const [selectedCategory, setSelCat] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aasada", amount: 1022, category: "Utilities" },
    { id: 3, description: "asdaa", amount: 10, category: "Utilities" },
    { id: 4, description: "eeaa", amount: 10, category: "Utilities" },
  ]);
  const visiblyExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <ExpenseFilter onSelectCategory={(category) => setSelCat(category)} />
      <ExpenseList
        expenses={visiblyExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
