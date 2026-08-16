import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ product, onQuickView, onAddToCart }) => {
  const { imgURL, name, price, rating } = product;

  return (
    <div className="flex flex-col w-full bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      {/* Product Image Container */}
      <div className="relative w-full h-[250px] bg-primary rounded-2xl flex justify-center items-center overflow-hidden">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Floating Rating Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <img src={star} alt="rating star" width={16} height={16} />
          <span className="text-xs font-semibold font-montserrat text-gray-800">{rating}</span>
        </div>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={() => onQuickView(product)}
            className="bg-white hover:bg-gray-100 text-gray-900 font-montserrat font-bold text-xs px-4 py-2 rounded-full shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-coral-red hover:bg-red-600 text-white font-montserrat font-bold text-xs px-4 py-2 rounded-full shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            Add +
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 px-2">
        <h3 className="text-xl font-bold font-palanquin text-gray-900 group-hover:text-coral-red transition-colors">
          {name}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold font-montserrat text-coral-red">
            {price}
          </p>
          <button
            onClick={() => onQuickView(product)}
            className="text-xs font-semibold font-montserrat text-slate-gray hover:text-coral-red underline decoration-coral-red/40"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
