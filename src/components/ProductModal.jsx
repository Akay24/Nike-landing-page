import React, { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] || product.sizes[0] : "US 9");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize,
      quantity,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold transition-colors"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-full sm:w-1/2 bg-primary rounded-2xl p-6 flex justify-center items-center relative group">
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-48 sm:w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-montserrat text-coral-red font-semibold">
                Official Nike Release
              </span>
              <h3 className="text-2xl font-bold font-palanquin text-gray-900 mt-1">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-coral-red font-montserrat mt-1">
                {product.price}
              </p>
              <p className="text-xs font-montserrat text-slate-gray mt-3 leading-relaxed">
                {product.description || "Designed for maximum athletic performance and supreme street style."}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-gray-700 font-montserrat uppercase tracking-wider mb-2">
                Select Size:
              </p>
              <div className="flex flex-wrap gap-2">
                {(product.sizes || ["US 7", "US 8", "US 9", "US 10", "US 11"]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-medium transition-all ${
                      selectedSize === size
                        ? "bg-coral-red text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700 font-montserrat uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="font-bold text-gray-600 hover:text-black px-1"
                >
                  -
                </button>
                <span className="text-sm font-semibold font-montserrat">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="font-bold text-gray-600 hover:text-black px-1"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              className="mt-6 w-full bg-coral-red hover:bg-red-600 text-white font-montserrat font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-coral-red/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Add to Bag</span>
              <span>—</span>
              <span>${((product.numericPrice || 200) * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
