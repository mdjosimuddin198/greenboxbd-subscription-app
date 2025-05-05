import React from "react";
import Subscription from "./Subscription";
import { useLoaderData } from "react-router";

const AllPriceCard = () => {
  const GreenBddata = useLoaderData();
  // console.log(GreenBddata);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {GreenBddata.map((data) => (
        <Subscription key={data.id} data={data}></Subscription>
      ))}
    </div>
  );
};

export default AllPriceCard;
