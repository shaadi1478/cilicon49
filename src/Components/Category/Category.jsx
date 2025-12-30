import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import computer from '../../assets/computer.png'
import phone from '../../assets/phone.png'
import headphone from '../../assets/headphone.png'
import keyboard from '../../assets/keyboard.png'
import camera from '../../assets/camera.png'
import tv from '../../assets/tv.png'

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Computer & Laptop", image: computer },
  { title: "SmartPhone", image: phone },
  { title: "Headphones", image: headphone },
  { title: "KeyBoard & Mouse", image: keyboard },
  { title: "Camera & Photo", image: camera },
  { title: "TV & Homes", image: tv },
];

const Category = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Shop with Categories
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="group h-full  p-4 flex flex-col items-center justify-center text-center shadow-xl shadow-indigo-500/50"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-20 object-contain mb-3"
                    whileHover={{ scale: 1.15 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 15,
                    }}
                  />

                  <p className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center shadow z-10 hover:bg-orange-600 transition"
          >
            ‹
          </button>

          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center shadow z-10 hover:bg-orange-600 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
