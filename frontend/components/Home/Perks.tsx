import React from "react";
import { perks } from "../../data/data";

const Perks = () => {
  return (
    <div className="grid font-monts w-full my-4 py-4 rounded-2xl bg-gray-100 grid-cols-2 md:grid-cols-4">
      {perks.map((perk) => (
        <div
          key={perk.title}
          className="flex flex-col md:flex-row items-center gap-3 justify-center"
        >
          <perk.icon size={60} color="skyblue" />
          <div className="flex flex-col text-center md:text-left text-xs md:text-base">
            <span className="font-bold">{perk.title}</span>
            <span className="block font-extralight">{perk.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perks;
