import React from "react";

interface PropTypes {
  product: { name: string; image: string; price: string };
}

const Product = ({ product }: PropTypes) => {
  return (
    <div
      key={product.name}
      className="p-5 flex flex-col items-center cursor-pointer active:scale-90 transition-all"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.name} />
      <div className="flex flex-col text-left text-base sm:text-lg">
        <span className="font-semibold">{product.name}</span>
        <span>₹ {product.price}</span>
      </div>
    </div>
  );
};

export default Product;
