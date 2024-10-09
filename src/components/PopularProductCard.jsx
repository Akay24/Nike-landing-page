import React from "react";
import { star } from "../assets/icons"; // Adjust the path as needed

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto">
      <img src={imgURL} alt={name} className="w-full h-auto object-cover" />
      <div className="mt-4 flex items-center gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-gray-900 font-palanquin">
        {name}
      </h3>
      <p className="mt-1 text-2xl font-semibold text-coral-red font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
