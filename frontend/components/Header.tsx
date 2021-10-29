import React from "react";
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-6 items-center w-full font-monts text-lg uppercase">
      <div className="flex gap-10 items-center">
        <Link href="/" passHref>
          <span className="font-black text-3xl cursor-pointer">ELCTRX</span>
        </Link>
        <ul className="md:flex gap-10 hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
      </div>
      <div className="flex gap-4 md:gap-7 items-center">
        <span className="cursor-pointer">Login</span>
        <div className="w-[1px] bg-gray-300 h-10"></div>
        <HiOutlineSearch size={23} className="text-gray-500 cursor-pointer" />
        <HiOutlineShoppingCart
          size={23}
          className="text-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
