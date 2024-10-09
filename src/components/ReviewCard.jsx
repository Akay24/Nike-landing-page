import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md max-w-xs mx-auto">
      <img
        src={imgURL}
        alt="customer"
        className="w-24 h-24 rounded-full object-cover"
      />
      <p className="mt-4 text-lg text-slate-gray font-montserrat">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-2 text-2xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
