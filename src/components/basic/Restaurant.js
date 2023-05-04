import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updateList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setMenuData(updateList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />;
    </>
  );
};

export default Restaurant;
