import React, { useState } from "react";
import Subscription from "./Subscription";
import { Link, useLoaderData } from "react-router";

const AllPriceCard = () => {
  const products = useLoaderData();

  // const [visible, setVisible] = useState(6);
  // const [allview, setAllView] = useState(true);
  // console.log(GreenBddata);
  // const handleViewMore = () => {
  //   if (allview) {
  //     setVisible((prv) => prv + 6);
  //     setAllView((prv) => !prv);
  //   } else {
  //     setVisible((prv) => prv - 6);
  //     setAllView((prv) => !prv);
  //   }
  // };

  return (
    <>
      <h3 className="text-5xl my-4 text-center ">
        Get Box{" "}
        <span className="text-bold text-base-200 ">Products Separately</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4  shadow-5xl shadow-amber-00 ">
        {products?.map((data) => (
          <Subscription key={data.id} data={data}></Subscription>
        ))}
      </div>
      {/* <div className="flex items-center justify-center py-4">
        {allview ? (
          <button onClick={handleViewMore} className="btn ">
            View More
          </button>
        ) : (
          <button onClick={handleViewMore} className="btn ">
            View Less
          </button>
        )}

        {allview ? (
          <Link onClick={handleViewMore} to="/products" className="btn ">
            View More
          </Link>
        ) : (
          <Link onClick={handleViewMore} to="/" className="btn ">
            go back
          </Link>
        )}
      </div> */}
    </>
  );
};

export default AllPriceCard;
