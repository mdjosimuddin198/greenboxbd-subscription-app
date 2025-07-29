import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";
import ReviewSection from "./ReviewSection";
import { Helmet } from "react-helmet";

const PriceDetails = () => {
  const [pricecard, setPriceCard] = useState({});
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  useEffect(() => {
    const targetPriceCard = data.find((singlePrice) => singlePrice.title == id);
    setPriceCard(targetPriceCard);
  }, [id, data]);

  const {
    title,
    thumbnail,
    banner,
    description,
    name,
    frequency,
    price,
    features,
    ratings,
    number_of_reviews,
    subscription_benefits,
  } = pricecard;
  return (
    <>
      <Helmet>
        <title> Price-Details| GreenBox BD</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className="hero-content  flex-col lg:flex-row">
          <img
            src={banner}
            alt={name}
            className=" w-4xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}!</h1>
            <p className="py-6">{description}</p>
            <p className="text-3xl text-gray-600 mb-2">
              {frequency} —
              <span className="text-secondary font-bold"> ${price}</span>
            </p>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {features?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800">
                Subscription Benefits:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {subscription_benefits?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-secondary flex items-center gap-2 font-semibold">
                <FaStar></FaStar> {ratings} ({number_of_reviews} reviews)
              </span>
            </div>
            <div className="flex flex-col md:flex-row py-4 gap-4">
              <button className="btn text-white ">Order Now</button>
              <button className="btn text-white  ">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* remove this rivew section from here i will add this section in my buy section list  */}
      {/* <ReviewSection></ReviewSection>  */}
    </>
  );
};

export default PriceDetails;
