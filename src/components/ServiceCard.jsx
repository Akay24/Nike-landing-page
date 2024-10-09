const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col items-center max-w-xs w-full rounded-lg shadow-lg p-6 bg-white">
      <div className="flex justify-center items-center bg-coral-red rounded-full p-3">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-4 text-2xl font-bold font-palanquin text-gray-900">
        {label}
      </h3>
      <p className="mt-2 text-base font-montserrat text-slate-gray text-center">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
