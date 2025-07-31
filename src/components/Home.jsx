import React from "react";
import Banar from "./Banar";
import FeatureSection from "./FeatureSection";
import { useLoaderData } from "react-router";
import Subscription from "./Subscription";
import AllPriceCard from "./AllPriceCard";
import CustomarReview from "./CustomarReview";
import { Helmet } from "react-helmet";

const Home = () => {
  const GreenBddata = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>GreenBox BD | Home</title>
      </Helmet>
      <Banar></Banar>
      <FeatureSection></FeatureSection>

      <section className="py-4">
        <AllPriceCard></AllPriceCard>
        <CustomarReview></CustomarReview>
      </section>
    </div>
  );
};

export default Home;
