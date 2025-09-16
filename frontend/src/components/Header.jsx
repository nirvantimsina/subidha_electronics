import React from "react";
import logo from "../assets/only-logo.png";

const Header = () => {
  return (
    <>
    <div className="border-1 p-3 m-3 mt-5 rounded-xl flex items-center">
      <img
        className="h-15 w-15 ml-4 rounded-lg"
        src={logo}
        alt="subidha-electronics-logo"
      />

      <div className="font-light text-2xl gap-10 flex-1 flex justify-center">
        <span>Home</span>
        <span>Our Products</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <span className="text-2xl font-light flex flex-row-reverse mr-6">
        Cart
      </span>
    </div>
  </>
  );
};

export default Header;