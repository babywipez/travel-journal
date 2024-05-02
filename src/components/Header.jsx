import React from "react";
import Logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--elements">
        <img src={Logo} className="header--logo"></img>
        <h2 className="header--title">Christopher's Travel Journal</h2>
      </div>
    </header>
  );
}
