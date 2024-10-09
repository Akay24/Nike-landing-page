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

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Main Home Route */}
        <Route
          path="/"
          element={
            <main className="relative">
              <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero />
              </section>

              <section className="px-5 py-5">
                <PopularProduct />
              </section>

              <section className="px-5 py-5">
                <SuperQuality />
              </section>

              <section className="px-10 py-10">
                <Services />
              </section>

              <section className="px-5 py-5">
                <SpecialOffer />
              </section>

              <section className="bg-blue-100 px-5 py-5">
                <CustomerReview />
              </section>

              <section className="px-10 py-16 sm:py-32 w-full">
                <Subscribe />
              </section>

              <section className="bg-black px-10 pt-10 pb-8">
                <Footer />
              </section>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
