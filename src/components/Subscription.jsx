import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const Subscription = ({ data }) => {
  // console.log(data);
  const {
    id,
    thumbnail,
    name,
    frequency,
    price,
    features,
    ratings,
    number_of_reviews,
    subscription_benefits,
  } = data;

  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-6 bg-white border border-gray-200">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-base-200 mb-2">{name}</h2>
      <p className="text-3xl text-gray-600 mb-2">
        {frequency} —<span className="text-secondary font-bold"> ${price}</span>
      </p>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Features:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800">Subscription Benefits:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {subscription_benefits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-secondary flex items-center gap-2 font-semibold">
          <FaStar></FaStar> {ratings} ({number_of_reviews} reviews)
        </span>
        <Link to={`/green/${id}`} className="btn btn-soft btn-success">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Subscription;
