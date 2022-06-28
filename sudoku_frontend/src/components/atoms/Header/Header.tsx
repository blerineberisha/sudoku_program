import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <>
      <hr id="headerRule" />
      <div id="header">
        <div id="items">
          <p><a id="hamburger"><MenuIcon id="menuIcon" /></a></p>
          <p><a id="sudoku" href="/">Sudoku</a></p>
          <p><a id="instr" href="/instructions">How to play</a></p>
          <p><a id="rank_gl" href="/all">Global ranks</a></p>
          <p><a id="rank_pers" href="/">Ranks</a></p>
        </div>
        <div id="loginIcon">
          <p><a id="login" href="/login"><PersonIcon /></a></p>

        </div>
      </div>

    </>
  );
};

export default Header;
