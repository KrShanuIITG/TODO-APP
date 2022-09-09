import React, { useState } from "react";
import todo_img from "../images/todo.svg";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // add item

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // delete the items

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  };

  // remove all

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {/* add logos */}

          <figure>
            <img src={todo_img} alt="todologo" />
            <figurecaptio>Add Your List Here ✌</figurecaptio>
          </figure>

          {/* // add item */}

          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add Item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            <i
              className="fa fa-plus add-btn"
              title="add-item"
              onClick={addItem}
            ></i>
          </div>

          {/* Show items */}

          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete-item"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>

          {/* button for clear all */}

          <div className="removeBtn">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span className="check">CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
