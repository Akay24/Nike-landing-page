import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import CustomerReview from './sections/CustomerReview';
import Footer from './sections/Footer';
import PopularProduct from './sections/PopularProduct';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.name === product.name && item.selectedSize === (product.selectedSize || "US 9")
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += product.quantity || 1;
        return updated;
      }
      return [...prev, { ...product, quantity: product.quantity || 1, selectedSize: product.selectedSize || "US 9" }];
    });
    triggerToast(`Added ${product.name} to your bag!`);
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    triggerToast("Item removed from bag.");
  };

  const handleCheckout = () => {
    setCartItems([]);
    setIsCartOpen(false);
    triggerToast("Order placed successfully! Thank you for shopping with Nike.");
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Nav 
        cartCount={cartTotalCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      <Routes>
        {/* Main Home Route */}
        <Route
          path="/"
          element={
            <main className="relative font-montserrat">
              <section className="xl:padding-l wide:padding-r padding-b pt-12">
                <Hero onAddToCart={handleAddToCart} />
              </section>

              <section className="padding">
                <PopularProduct 
                  onQuickView={(prod) => setSelectedProduct(prod)} 
                  onAddToCart={handleAddToCart} 
                />
              </section>

              <section className="padding">
                <SuperQuality />
              </section>

              <section className="padding-x py-10">
                <Services />
              </section>

              <section className="padding">
                <SpecialOffer onAddToCart={handleAddToCart} />
              </section>

              <section className="bg-pale-blue padding">
                <CustomerReview />
              </section>

              <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe onSubscribeSuccess={(msg) => triggerToast(msg)} />
              </section>

              <section className="bg-black padding-x pt-12 pb-8">
                <Footer />
              </section>
            </main>
          }
        />
      </Routes>

      {/* Interactive Components */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </Router>
  );
};

export default App;
