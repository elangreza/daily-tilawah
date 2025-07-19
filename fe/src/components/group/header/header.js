import React from "react";

const Header = (props) => {
  return (
    <div>
      <header className="App-header flex bg-transparent h-[80px] w-full items-center justify-center text-3xl text-white">
        <h3>{props.titleApp}</h3>
      </header>
    </div>
  );
};

export default Header;
