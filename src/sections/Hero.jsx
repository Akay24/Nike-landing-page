import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard"; 
import { useState } from "react"; 

const Hero = ({ onAddToCart }) => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const changeBigShoeImage = (imgURL) => {
    setBigShoeImg(imgURL); 
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <div className="inline-flex items-center gap-2 bg-coral-red/10 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-coral-red animate-ping" />
          <p className="text-sm font-montserrat text-coral-red font-semibold tracking-wide">
            Summer 2026 Collection
          </p>
        </div>
        <h1 className="mt-6 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[70px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-r-2xl">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active lifestyle.
        </p>
        
        <div className="flex items-center gap-4 flex-wrap">
          <a href="#products">
            <Button label="Shop now" iconURL={arrowRight} />
          </a>
          <button
            onClick={() => onAddToCart({
              id: "hero-shoe-1",
              name: "Nike Air Max Special Edition",
              price: "$240.00",
              numericPrice: 240,
              imgURL: bigShoeImg,
              selectedSize: "US 9"
            })}
            className="border-2 border-slate-gray/30 text-gray-800 font-montserrat font-semibold px-6 py-3 rounded-full hover:border-coral-red hover:text-coral-red transition-all"
          >
            Quick Add ($240)
          </button>
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-16 gap-12 sm:gap-16 border-t border-gray-100 pt-8">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-4xl font-bold font-palanquin text-gray-900">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-3xl xl:rounded-l-3xl">
        <img
          src={bigShoeImg} 
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 transition-all duration-500 transform hover:scale-105 hover:-rotate-3 filter drop-shadow-2xl"
        />
        <div className="flex sm:gap-6 gap-4 absolute flex-wrap justify-center -bottom-[5%] sm:left-[10%] z-20">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe} 
              changeBigShoeImage={changeBigShoeImage}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
