import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Nav from "./Nav";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [navList, setNavList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setMenuData(updateList);
  };

  return (
    <>
      <Nav filterItem={filterItem} navList={navList} />
      <MenuCard menuData={menuData} />;
    </>
  );
};

export default Restaurant;
