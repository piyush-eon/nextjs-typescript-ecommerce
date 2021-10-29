import React from "react";
import { Product } from "..";
import { trending } from "../../data/data";

const BestSelling = () => {
  return (
    <div className="text-center py-5 font-monts">
      <h2 className="font-extrabold text-gray-600 text-3xl sm:text-5xl">
        Best Selling Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {trending.map((trend) => (
          <Product product={trend} key={trend.name} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
