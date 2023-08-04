import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CBtn = ({ prop }) => {
  return (
    <button className="border px-10 py-2 rounded hover:text-[#fff]  bg-white text-[#1f1e1f] hover:bg-[#1f1e1f] flex items-center gap-2 duration-125 transition-all ease">
      <AiOutlineShoppingCart /> {prop}
    </button>
  );
};

export default CBtn;
