import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import computer from "../../assets/computer.png";
import phone from "../../assets/phone.png";
import headphone from "../../assets/headphone.png";
import keyboard from "../../assets/keyboard.png";
import camera from "../../assets/camera.png";
import tv from "../../assets/tv.png";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Laptop & PC", image: computer },
  { title: "Smart Phone", image: phone },
  { title: "Headphone", image: headphone },
  { title: "Electronics Devices", image: keyboard },
  { title: "Camera", image: camera },
  { title: "TV", image: tv },
];

const Category = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Shop with Categories
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() =>
                    navigate("/shop", {
                      state: { category: item.title },
                    })
                  }
                  className="cursor-pointer p-4 flex flex-col items-center justify-center text-center bg-white rounded-xl shadow hover:shadow-xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 object-contain mb-3"
                  />
                  <p className="text-sm font-medium text-gray-700 hover:text-orange-500">
                    {item.title}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV BUTTONS */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-500 text-white"
          >
            ‹
          </button>

          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-500 text-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
