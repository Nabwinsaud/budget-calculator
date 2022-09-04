import React from "react";
import "./budgetItem.css";
import BudgetList from "./BudgetList";
const BudgetItem = ({ budget, handleEdit, handleDelete }) => {
  return (
    <div>
      <div className="budgetitem">
        <ul>
          {budget.map((item) => {
            return (
              <>
                <li key={item.id}>
                  <BudgetList
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BudgetItem;
