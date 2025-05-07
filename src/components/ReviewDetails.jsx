import React from "react";
import { FaStar } from "react-icons/fa";
import sliderImg from "../assets/review.jpeg";

const ReviewDetails = ({ reviewMsg }) => {
  const { name, rating, review } = reviewMsg;

  return (
    <div className="hero-content w-full justify-between flex-col lg:flex-row ">
      <div>
        <img className="md:w-[550px]" src={sliderImg} alt="" />
      </div>
      <div className="bg-white shadow-md rounded-lg  p-6  mx-auto">
        <div className="flex items-center text-green-500 mb-3">
          {[...Array(rating)].map((_, star) => (
            <FaStar key={star} />
          ))}
        </div>
        <p className="text-gray-700 italic mb-4">"{review}"</p>
        <h4 className="font-semibold text-gray-800">— {name}</h4>
      </div>
    </div>
  );
};

export default ReviewDetails;
