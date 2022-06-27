import React from "react";
import "./Header.css";


const Header = () => {
  return (
    <>
      <hr id="headerRule" />
      <div id="header">
        <div id="items">
          <p><a id="sudoku" href="/">Sudoku</a></p>
          <p><a id="instr" href="/instructions">How to play</a></p>
          <p><a id="login" href="/login">Login</a></p>
        </div>
      </div>
    </>
  );
};

export default Header;
