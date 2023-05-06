import React from "react";

const Nav = ({ filterItem, navList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navList.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
