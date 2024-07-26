import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Buttons";
import { useEffect, useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expanse-tracker/exponents/ExpenseList";
import ExpenseFilter from "./expanse-tracker/exponents/ExpenseFilter";
import ProductList from "./components/ProductList";
const connect = () => console.log("connectinng");
const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return <div></div>;
}
export default App;
