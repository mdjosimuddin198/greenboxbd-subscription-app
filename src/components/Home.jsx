import React from "react";
import Banar from "./Banar";
import FeatureSection from "./FeatureSection";
import { useLoaderData } from "react-router";
import Subscription from "./Subscription";
import AllPriceCard from "./AllPriceCard";
import CustomarReview from "./CustomarReview";

const Home = () => {
  const GreenBddata = useLoaderData();

  return (
    <div>
      <Banar></Banar>
      <FeatureSection></FeatureSection>

      <section className="py-4">
        <h3 className="text-5xl my-4 text-center ">
          Get Box{" "}
          <span className="text-bold text-base-200 ">Products Separately</span>
        </h3>

        <AllPriceCard></AllPriceCard>
        <CustomarReview></CustomarReview>
      </section>
    </div>
  );
};

export default Home;
