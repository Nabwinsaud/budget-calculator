import React from "react";
import "./budgetForm.css";
const BudgetForm = ({
  handleSubmit,
  remarks,
  price,
  handleRemarks,
  handlePrice,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input remarks">
            <label htmlFor="Remarks">Remarks</label>
          </div>
          <input
            type="text"
            value={remarks}
            onChange={handleRemarks}
            placeholder="Room Rent"
            autoComplete="off"
            id="remarks"
            // required
          />
          <div>
            <div className="input price">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                value={price}
                autoComplete="off"
                placeholder="3000"
                onChange={handlePrice}
                id="price"
              />
            </div>
          </div>
          <button className="add-items">Add Items</button>
        </form>
      </div>
    </div>
  );
};

export default BudgetForm;
