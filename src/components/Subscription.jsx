import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const Subscription = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-6 bg-white border border-gray-200">
      <img
        src={data.thumbnail}
        alt={data.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-base-200 mb-2">{data.name}</h2>
      <p className="text-3xl text-gray-600 mb-2">
        {data.frequency} —
        <span className="text-secondary font-bold"> ৳{data.price}</span>
      </p>
      <p className="text-gray-700 mb-4">{data.description}</p>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Features:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {data.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Subscription Benefits:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {data.subscription_benefits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-yellow-500 flex items-center gap-2 font-semibold">
          <FaStar></FaStar> {data.ratings} ({data.number_of_reviews} reviews)
        </span>
        <button className="btn btn-soft btn-success">View More</button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-lime-50 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">Choose Your Plan</h1>
        <p className="text-gray-600 mt-2">
          Find the right subscription for your team
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {pricingData.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Subscription;
