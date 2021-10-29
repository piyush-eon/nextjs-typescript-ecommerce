import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 h-60 flex justify-center mx-5 rounded-t-2xl items-center">
      <Link href="/" passHref>
        <span className="text-center font-black box-border font-monts text-6xl text-white cursor-pointer">
          ELCTRX <br />
          <span className="font-extralight text-2xl">By Roadside Coder</span>
        </span>
      </Link>
    </div>
  );
};

export default Footer;
