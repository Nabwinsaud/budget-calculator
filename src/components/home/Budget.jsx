import React, { useState, useEffect } from "react";
import "./budget.css";
import Alert from "../Alert";
import BudgetForm from "../BudgetForm";
import { v4 as uuidv4 } from "uuid";
import BudgetItem from "../BudgetItem";
import { AiFillDelete } from "react-icons/ai";
const Budget = () => {
  // arrays of items
  // console.log("Random id is:", uuidv4());

  const monthlyBudegt = localStorage.getItem("budget")
    ? JSON.parse(localStorage.getItem("budget"))
    : [];

  useEffect(() => {
    console.log("useEffect runs");
    localStorage.setItem("budget", JSON.stringify(budget));
  });
  // const monthlyBudegt = [
  //   {
  //     id: uuidv4(),
  //     remarks: "Rent",
  //     price: 300,
  //   },
  //   {
  //     id: uuidv4(),
  //     remarks: "Khaja",
  //     price: 50,
  //   },
  //   {
  //     id: uuidv4(),
  //     remarks: "New Laptop",
  //     price: 200,
  //   },
  // ];
  // useState hooks to render our budeget items
  const [budget, setBudget] = useState(monthlyBudegt);
  // remarks
  const [remarks, setRemarks] = useState("");
  // price
  const [price, setPrice] = useState("");

  // alert method

  // const [alert, setAlert] = useState(false);
  const [alert, setAlert] = useState({ show: false });

  // handleRemarks

  const handleRemarks = (e) => {
    // console.log("Remarks value:", e.target.value);
    setRemarks(e.target.value);
  };

  // hanldeprice
  const handlePrice = (e) => {
    setPrice(e.target.value);
    // console.log("price amount:", e.target.value);
  };

  // handle delete

  const handleDelete = (id) => {
    // console.log()
    const deleteSingle = budget.filter((item) => item.id !== id);
    setBudget(deleteSingle);
    handleAlert({ type: "reject", text: "Item deleted successfully" });
    // console.log(deleteSingle);
  };
  //handle edit
  const handleEdit = (id) => {};
  // hanlde Alert

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    // time interval to show only few seconds
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  // hanlde submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remarks !== "" && price > 0) {
      // logic to add item
      // const AddBudget={id:uuidv4(),charge:charge,price:price}
      const addBudget = { id: uuidv4(), remarks, price };
      // setBudget(addBudget); it will going to throw an error cause we need to store inisde array
      // setBudget([addBudget]);  // will replace previous items and override them spread operator is used [...] to copy and keep the data same
      setBudget([...budget, addBudget]);
      // we are setting as it is i.e budget
      setRemarks("");
      setPrice("");
      handleAlert({ type: "success", text: "Item added successfully" });
    }
    // else
    else {
      // hanlde alert
      handleAlert({
        type: "reject",
        text: "remarks cannot be empty and price must be greater then 0 to add items...",
      });
      // alert("Please type text and number");
    }
  };

  const handleDeleteAll = () => {
    setAlert({ type: "success", text: "All the items deleted successfully" });
    setBudget([]);
  };

  return (
    <div>
      {/* show alert when it is true */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {/* <Alert /> */}
      <div className="container budget">
        <div className="budget-section">
          <h1 className="budget-title">Monthly budget Tracker</h1>
          {/* main section */}
          <main className="main">
            <BudgetForm
              handleSubmit={handleSubmit}
              remarks={remarks}
              price={price}
              handlePrice={handlePrice}
              handleRemarks={handleRemarks}
            />
            <BudgetItem
              budget={budget}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </main>

          {budget.length > 0 && (
            <button className="delete-all" onClick={handleDeleteAll}>
              <span>
                <AiFillDelete className="delete-icon" />
                Delete All
              </span>
            </button>
          )}
        </div>
        {budget.length > 0 ? (
          <h1 className="total">
            you have {budget.length} item and total price is Rs:
            {budget.reduce((total, current) => {
              // return total + parseInt(current.price);
              return (total = total + parseInt(current.price)); // correct
              // should not need to parse whose only we need to parse current
              // return parseInt(total + current.price); // mathematically incorrect cause it will add string our calcualtion will be failed
            }, 0)}
          </h1>
        ) : (
          <h1 className="total">Your item is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Budget;
