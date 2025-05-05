import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const PriceDetails = () => {
  const [pricecard, setPriceCard] = useState({});
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  useEffect(() => {
    const targetPriceCard = data.find((singlePrice) => singlePrice.id == id);
    setPriceCard(targetPriceCard);
  }, [id, data]);

  return (
    <div>
      <h3>{pricecard.name}</h3>
    </div>
  );
};

export default PriceDetails;
