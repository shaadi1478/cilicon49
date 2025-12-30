import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { NavLink } from "react-router-dom";

import allproduct from "../../assets/allproduct.jpg";

const categories = ["Recent Product", "Smart Phone", "Laptop", "Headphone", "TV"];

export default function FeaturedProducts() {
  const [active, setActive] = useState("Recent Product");
  const [products, setProducts] = useState([]);

  // 🔹 Load product.json from public folder
  useEffect(() => {
    fetch("/product.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Product load error:", err));
  }, []);

  const filtered =
  (active === "Recent Product"
    ? products
    : products.filter(p => p.category === active)
  ).slice(0, 8);


  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>

        <div className="flex items-center gap-5 text-sm mt-3 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative pb-1 transition ${
                active === cat
                  ? "text-orange-500 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}

          <NavLink
            to="/shop"
            className="text-gray-500 flex items-center gap-1"
          >
            Browse All Product →
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left banner */}
        <div
          className="lg:w-1/4 rounded-lg bg-cover bg-center p-6 flex flex-col justify-between"
          style={{ backgroundImage: `url(${allproduct})` }}
        >
          <div className="bg-yellow-100/90 p-4 rounded">
            <p className="text-xs font-semibold text-orange-500">
              COMPUTER & ACCESSORIES
            </p>
            <h3 className="text-3xl font-bold mt-2">32% Discount</h3>
            <p className="text-sm text-gray-700 mt-1">
              For all electronics products
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Offers ends in: <b>ENDS OF CHRISTMAS</b>
            </p>
          </div>

          <button className="mt-6 w-fit bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            SHOP NOW →
          </button>
        </div>

        {/* Products grid */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => (
            <div
              key={p.id}
              className="group bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition"
            >
              {p.tag && (
                <span
                  className={`absolute top-3 left-3 text-xs px-2 py-1 rounded text-white ${
                    p.tag === "SALE"
                      ? "bg-green-500"
                      : p.tag === "BEST DEALS"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                >
                  {p.tag}
                </span>
              )}

              {/* Hover actions */}
              <div className="absolute right-3 top-1/3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-orange-500 hover:text-white">
                  <Heart size={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-orange-500 hover:text-white">
                  <ShoppingCart size={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-orange-500 hover:text-white">
                  <Eye size={16} />
                </button>
              </div>

              <img
                src={p.image}
                alt={p.name}
                className="h-36 w-full object-contain mb-4"
              />

              <div className="flex items-center text-yellow-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < p.rating ? "★" : "☆"}</span>
                ))}
                <span className="text-gray-500 text-xs ml-2">
                  ({p.reviews})
                </span>
              </div>

              <h4 className="text-sm font-medium mt-2 line-clamp-2">
                {p.title}
              </h4>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-orange-500 font-semibold">
                  {p.price}
                </span>
                {p.oldPrice && (
                  <span className="text-xs line-through text-gray-400">
                    {p.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
