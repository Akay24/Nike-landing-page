import { useState } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='px-6 py-8 absolute z-20 w-full font-bold'>
      <nav aria-label="Main Navigation" className='flex justify-between items-center max-w-screen-xl mx-auto relative'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='w-[129px] h-[29px]'
          />
        </a>

        {/* Desktop Nav Bar */}
        <ul className='hidden lg:flex flex-1 justify-center items-center gap-16'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-600 hover:text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign in Link for Large Screens */}
        <div className='hidden lg:flex gap-2 text-lg font-montserrat font-bold'>
          <a href='/'>Sign in</a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          aria-label='Toggle mobile menu'
          className='lg:hidden z-30'
        >
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </button>

        {/* Mobile Menu */}
        <div
          id='mobile-menu'
          className={`absolute top-16 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 lg:hidden z-40 transition-transform transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}
          role='navigation'
        >
          <ul className='flex flex-col items-center'>
            {navLinks.map((item) => (
              <li key={item.label} className='py-2'>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-slate-600 hover:text-slate-800"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className='py-2'>
              <a
                href='/'
                className="font-montserrat text-lg text-slate-600 hover:text-slate-800"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
