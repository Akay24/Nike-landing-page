import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + (item.numericPrice || 200) * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-slideLeft">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold font-palanquin text-gray-900">Your Bag</h2>
                <span className="bg-coral-red/10 text-coral-red font-montserrat text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl mb-3">
                    🛍️
                  </div>
                  <p className="font-montserrat font-medium text-gray-500">Your bag is empty.</p>
                  <p className="font-montserrat text-xs text-slate-gray mt-1">Explore our collections and add your favorite kicks!</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${idx}`}
                    className="flex gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors items-center"
                  >
                    <img
                      src={item.imgURL}
                      alt={item.name}
                      className="w-16 h-16 object-contain bg-primary rounded-lg p-2"
                    />
                    <div className="flex-1">
                      <h4 className="font-palanquin font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-gray font-montserrat mt-0.5">
                        Size: <span className="font-semibold text-gray-800">{item.selectedSize || "US 9"}</span>
                      </p>
                      <p className="text-sm font-bold text-coral-red font-montserrat mt-1">
                        ${((item.numericPrice || 200) * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-xs text-gray-400 hover:text-red-500 font-montserrat"
                      >
                        Remove
                      </button>
                      <div className="flex items-center border rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-montserrat text-gray-600 text-sm">Subtotal</span>
                <span className="font-montserrat font-bold text-xl text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>
              <p className="text-xs font-montserrat text-slate-gray mb-4">
                Free standard shipping & 30-day return policy applied.
              </p>
              <button
                onClick={onCheckout}
                className="w-full bg-coral-red hover:bg-red-600 text-white font-montserrat font-bold py-3.5 rounded-full shadow-lg transition-all"
              >
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
