import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container py-3">
      <h3 className="text-center text-4xl font-bold font-palanquin">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="mt-4 max-w-lg mx-auto text-center text-base text-gray-700">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
