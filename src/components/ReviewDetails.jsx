import React from "react";
import { FaStar } from "react-icons/fa";
import sliderImg from "../assets/review.jpeg";

const ReviewDetails = ({ reviewMsg }) => {
  const { name, rating, review, img } = reviewMsg;
  console.log(rating);

  return (
    <div className="hero-content max-h-[300px] w-full justify-between flex-col lg:flex-row ">
      <div className="h-[300px] w-1/2 ">
        <img className="md:w-[550px] rounded-lg" src={img} alt="" />
      </div>
      <div className="h-[300px] w-1/2 flex items-center justify-center flex-col  p-6  mx-auto">
        <div className="flex items-center justify-center text-green-500 mb-3">
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
