import React from "react";
import "./mainHeader.scss";
import Search from "./Search/Search";

const MainHeader = () => {
  return (
    <header className="main-header slide-top">
      <div className="container text-center">
        <h1 className="main-header__logo-text">Desafio Calindra</h1>
        {/* <div class="main-header__logo-circle">
          <div class="v-1">v</div>
          <div class="v-1">v</div>
          <div class="v-1">v</div>
          <div class="v-1">v</div>
        </div> */}
        <Search></Search>
      </div>
    </header>
  );
};

export default MainHeader;
