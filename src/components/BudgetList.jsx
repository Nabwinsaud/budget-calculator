import React from "react";
import "./budgetList.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
const BudgetList = ({ item, handleEdit, handleDelete }) => {
  return (
    <div>
      <div className="list-item">
        <h4 className="list">
          <span className="remarks">{item.remarks}</span>
          <span className="price">${item.price}</span>
          <span className="edit" onClick={() => handleEdit(item.id)}>
            <AiOutlineEdit size={18} />
          </span>
          <span className="delete" onClick={() => handleDelete(item.id)}>
            <AiOutlineDelete size={18} />
          </span>
        </h4>
      </div>
    </div>
  );
};

export default BudgetList;
