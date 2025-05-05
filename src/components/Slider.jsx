import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const images = [
  "https://i.ibb.co.com/KcdMdS7R/image.png",
  "https://i.ibb.co.com/0V6LbGy4/image.png",
  "https://i.ibb.co.com/SXwhDLsD/image.png",
  "https://i.ibb.co.com/qYd1gQX6/image.png",
  " https://i.ibb.co.com/hRghY0TX/image.png",
];

const Slider = () => {
  return (
    <section className="flex justify-center items-center py-12 ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-80 h-96"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
