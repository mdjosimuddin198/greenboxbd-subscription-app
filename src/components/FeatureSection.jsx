import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import veggieImage from "../assets/fetureImg.jpg";

const featuresLeft = [
  {
    title: "10 Fresh Vegetables",
    desc: "Get a hand-picked selection of 10 seasonal, farm-fresh vegetables sourced directly from local growers — ensuring maximum freshness and taste every time.",
  },
  {
    title: "Monthly Subscription",
    desc: "Enjoy peace of mind with a flexible monthly plan. Once you subscribe, we take care of the rest — no more last-minute grocery runs or worrying about what’s for dinner.",
  },
  {
    title: "5kg Total Weight",
    desc: "Each box is carefully packed with 5 kilograms of high-quality, nutrient-rich vegetables — enough to keep your meals healthy and your fridge stocked for the week.",
  },
];

const featuresRight = [
  {
    title: "Daily Fresh Deliveries",
    desc: "We deliver vegetables that are picked fresh the same day — locking in nutrients and keeping your meals vibrant and full of flavor.",
  },
  {
    title: "Available In Your Town",
    desc: "Our delivery network covers your local area, so no matter where you are in town, you can enjoy the same fresh and timely service.",
  },
  {
    title: "See What You Get",
    desc: "Preview your box before it arrives. We give you a sneak peek at what's inside so you can plan your meals and reduce food waste.",
  },
];

const FeatureBox = ({ title, desc }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold flex items-start gap-2 text-gray-800">
      <BsCheckCircle className="text-green-600 mt-1" />
      {title}
    </h3>
    <p className="text-gray-600 mt-2">{desc}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <h3 className="text-3xl text-center font-bold">
        Weekly, Monthly Food Crates
      </h3>
      <p className="text-xl text-center text-base-200">
        Our Fresh Food Gets Delivered In Just One Day
      </p>
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Features */}
        <div>
          {featuresLeft.map((item, index) => (
            <FeatureBox key={index} title={item.title} desc={item.desc} />
          ))}
        </div>

        {/* Image in the Middle */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={veggieImage}
            alt="Fresh Vegetables"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Features */}
        <div>
          {featuresRight.map((item, index) => (
            <FeatureBox key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
