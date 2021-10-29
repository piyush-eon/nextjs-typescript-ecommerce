import React from "react";
import { categories } from "../../data/data";

const CategoryTiles = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 -mx-2 mt-2">
      {categories.map((category, i) => (
        <div
          key={category.name}
          style={{
            background: category.color,
          }}
          className={`relative category text-4xl hover:scale-[102%] flex p-7 justify-end cursor-pointer active:scale-95 transition-all ${
            i === 2 || i === 3
              ? "text-4xl md:text-6xl col-span-2"
              : "col-span-2 md:col-span-1"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.image}
            alt={category.name}
            className="object-contain"
          />
          <div className="absolute bottom-10 left-10 flex flex-col items-start gap-5">
            <span className="uppercase text-white opacity-70 font-extrabold">
              {category.name}
            </span>
            <button className="text-base bg-white px-4 py-2 pt-1.5 rounded-full">
              Browse
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTiles;
