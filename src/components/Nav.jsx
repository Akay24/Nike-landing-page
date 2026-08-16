import { useState, useEffect } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 z-30 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-4" 
        : "bg-transparent py-6"
    }`}>
      <nav aria-label="Main Navigation" className="flex justify-between items-center max-container padding-x">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={headerLogo}
            alt="Nike Logo"
            width={129}
            height={29}
            className="w-[129px] h-[29px] object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-12">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-base text-slate-600 hover:text-coral-red font-medium transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons: Cart & Sign In */}
        <div className="flex items-center gap-6">
          {/* Cart Icon & Counter */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-800 hover:text-coral-red transition-colors flex items-center justify-center focus:outline-none"
            aria-label="View Shopping Cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coral-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <a 
            href="#products" 
            className="hidden lg:inline-block font-montserrat font-semibold text-sm bg-coral-red text-white px-5 py-2.5 rounded-full hover:bg-red-600 shadow-md hover:shadow-coral-red/30 transition-all"
          >
            Shop Now
          </a>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="lg:hidden p-1 focus:outline-none"
          >
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-8 lg:hidden z-40 animate-fadeIn"
            role="navigation"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat text-lg text-slate-700 hover:text-coral-red font-medium block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full bg-coral-red text-white font-montserrat font-bold py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <span>View Bag ({cartCount})</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
