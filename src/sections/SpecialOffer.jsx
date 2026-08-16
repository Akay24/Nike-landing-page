import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = ({ onAddToCart }) => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container padding-x'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full drop-shadow-xl hover:scale-[1.02] transition-transform duration-300'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4 items-center'>
          <a href="#products">
            <Button label='Shop now' iconURL={arrowRight} />
          </a>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart({
                id: "special-offer-shoe",
                name: "Nike Limited Edition Special Offer",
                price: "$180.00",
                numericPrice: 180,
                imgURL: offer,
                selectedSize: "US 10"
              })}
              className="bg-white border border-slate-gray text-slate-gray hover:text-coral-red hover:border-coral-red font-montserrat font-semibold px-7 py-4 rounded-full transition-all"
            >
              Claim Deal ($180)
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;