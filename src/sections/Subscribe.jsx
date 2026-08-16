import { useState } from "react";
import Button from "../components/Button";

const Subscribe = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    if (onSubscribeSuccess) {
      onSubscribeSuccess(`Thank you for subscribing! Check ${email} for your 10% discount code.`);
    }
    setEmail("");
  };

  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10 padding-x'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex flex-col gap-2">
        <form 
          onSubmit={handleSubmit}
          className='w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray/40 rounded-full bg-white shadow-sm'
        >
          <input 
            type='email' 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder='subscribe@nike.com' 
            className='input'
            required 
          />
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' fullWidth />
          </div>
        </form>
        {error && (
          <p className="text-xs font-montserrat text-red-500 pl-4">{error}</p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;