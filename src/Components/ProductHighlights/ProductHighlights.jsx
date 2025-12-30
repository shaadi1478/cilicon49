import React from "react";
import phone from "../../assets/phone.png";
import samsung from "../../assets/samsung.png";
import tv from "../../assets/tv57.png";
import camera from "../../assets/drone.png";
import earbuds from "../../assets/tozo.png";
import speaker from "../../assets/headphones.png";
import monitor from "../../assets/dell.png";
import console from "../../assets/ac.png";

const data = [
  {
    title: "FLASH SALE TODAY",
    items: [
      { name: "Bose Sport Earbuds – Wireless Earphones", price: "$1,500", image: earbuds },
      { name: "Simple Mobile 4G LTE Prepaid Smartphone", price: "$1,500", image: phone },
      { name: "4K UHD LED Smart TV with Chromecast Built-In", price: "$1,500", image: tv },
    ],
  },
  {
    title: "BEST SELLERS",
    items: [
      { name: "Samsung Electronics Galaxy S21 5G", price: "$1,500", image: samsung },
      { name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB", price: "$1,500", image: phone },
      { name: "Sony DSCX8 High Zoom Point & Shoot Camera", price: "$1,500", image: camera },
    ],
  },
  {
    title: "TOP RATED",
    items: [
      { name: "Portable Washing Machine, 11lbs capacity", price: "$1,500", image: console },
      { name: "Sony DSCX8 High Zoom Point & Shoot Camera", price: "$1,500", image: camera },
      { name: "Dell Optiplex 7000x7480 All-in-One Monitor", price: "$1,500", image: monitor },
    ],
  },
  {
    title: "NEW ARRIVAL",
    items: [
      { name: "TOZO T6 True Wireless Earbuds Bluetooth", price: "$1,500", image: earbuds },
      { name: "JBL FLIP 4 – Waterproof Portable Speaker", price: "$1,500", image: speaker },
      { name: "Xbox Game Pass 2 1080p Pan/Tilt Indoor Camera", price: "$1,500", image: console },
    ],
  },
];

const ProductHighlights = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((col, index) => (
          <div key={index}>
            <h2 className="font-semibold text-sm mb-4 uppercase text-gray-800">
              {col.title}
            </h2>

            <div className="space-y-4">
              {col.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <p className="text-sm text-gray-700 leading-snug">
                      {item.name}
                    </p>
                    <p className="text-blue-500 font-semibold text-sm mt-1">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
