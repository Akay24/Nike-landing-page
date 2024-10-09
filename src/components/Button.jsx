const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  isLoading,
  loadingText,
  className, // New prop for custom styles
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"} ${isLoading && "opacity-50 cursor-not-allowed"}
      transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-red
      active:bg-white active:text-coral-red ${className}`}
      disabled={isLoading}
      aria-label={iconURL ? 'Button with icon' : 'Button'}
      aria-disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span>{loadingText || "Loading..."}</span>
          <div className='w-5 h-5 border-4 border-t-transparent border-white border-solid rounded-full animate-spin'></div>
        </>
      ) : (
        <>
          {label}
          {iconURL && (
            <img
              src={iconURL}
              alt='arrow right icon'
              className='ml-2 rounded-full bg-white w-5 h-5'
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
