import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewDetails from "./ReviewDetails";

// Example review data
const reviews = [
  {
    name: "Anika Rahman",
    rating: 5,
    review: "Fresh veggies every week! Very reliable and worth the price.",
    img: "https://i.ibb.co/Sqscpvm/image.png",
  },
  {
    name: "Tanvir Hasan",
    rating: 4,
    review: "The delivery is always on time. Highly recommended!",
    img: "https://i.ibb.co/fdZMNsYW/image.png",
  },
  {
    name: "Sadia Khatun",
    rating: 5,
    review: "Quality is top-notch. Loved the packaging and freshness.",
    img: "https://i.ibb.co/kVLkGq0s/image.png",
  },
  {
    name: "Rifat Hossain",
    rating: 3,
    review:
      "Nice idea but packaging could be better. Too much of the same veggie sometimes. Still better than local bazaar.",
    img: "https://i.ibb.co/DgMQwqYs/image.png",
  },
];

const ReviewSection = () => {
  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Fresh Food. <span className="text-base-200">Fresh Reviews</span>
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {reviews.map((reviewMsg, index) => (
          <SwiperSlide key={index}>
            <ReviewDetails reviewMsg={reviewMsg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
