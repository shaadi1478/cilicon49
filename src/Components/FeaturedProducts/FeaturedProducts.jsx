import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "../Context/CartContext";

import allproduct from "../../assets/allproduct.jpg";

/* CATEGORY LIST (UI) */
const categories = [
  "Recent Product",
  "Laptop & PC",
  "Smart Phone",
  "Camera",
  "Headphone",
  "Gaming Console",
  "Smart Watch",
];

export default function FeaturedProducts() {
  const [active, setActive] = useState("Recent Product");
  const [products, setProducts] = useState([]);
  const [quickView, setQuickView] = useState(null);

  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();
  const navigate = useNavigate();

  /* LOAD PRODUCTS */
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  /* CATEGORY FILTER (FIXED) */
  const filtered =
    active === "Recent Product"
      ? products
      : products.filter(
        (p) =>
          p.category &&
          p.category.toLowerCase() === active.toLowerCase()
      );

  const visibleProducts = filtered.slice(0, 8);

  const isWishlisted = (id) =>
    wishlist.some((item) => item.id === id);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-semibold">Featured Products</h2>

        <div className="flex flex-wrap items-center gap-5 text-sm mt-3 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative pb-1 transition ${active === cat
                  ? "text-orange-500 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-orange-500"
                  : "text-gray-500 hover:text-orange-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ================= LEFT BANNER ================= */}
        <div
          className="lg:w-1/4 rounded-xl bg-cover bg-center p-6 flex flex-col justify-between"
          style={{ backgroundImage: `url(${allproduct})` }}
        >
          <div className="bg-yellow-100/90 p-5 rounded-lg">
            <p className="text-xs font-semibold text-orange-500">
              COMPUTER & ACCESSORIES
            </p>
            <h3 className="text-3xl font-bold mt-2">32% Discount</h3>
            <p className="text-sm text-gray-700 mt-1">
              For all electronics products
            </p>
          </div>

          <NavLink
            to="/shop"
            className="mt-6 w-fit bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            SHOP NOW →
          </NavLink>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl shadow-md p-5 relative hover:shadow-xl transition"
            >
              {/* BADGE */}
              {p.tag && (
                <span className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded text-white bg-red-500">
                  {p.tag}
                </span>
              )}

              {/* ACTION ICONS */}
              <div className="absolute right-3 top-1/3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <ActionBtn
                  icon={<Heart size={16} />}
                  active={isWishlisted(p.id)}
                  onClick={() => toggleWishlist(p)}
                />
                <ActionBtn
                  icon={<ShoppingCart size={16} />}
                  onClick={() => addToCart({ ...p, qty: 1 })}
                />
                <ActionBtn
                  icon={<Eye size={16} />}
                  onClick={() => setQuickView(p)}
                />
              </div>

              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                className="h-40 w-full object-contain mb-4 cursor-pointer"
                onClick={() => navigate(`/product/${p.id}`)}
              />

              {/* RATING */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < p.rating ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                ))}
                <span className="text-gray-500 text-xs ml-1">
                  ({p.reviews})
                </span>
              </div>

              {/* TITLE */}
              <h4
                onClick={() => navigate(`/product/${p.id}`)}
                className="text-sm font-medium mt-2 line-clamp-2 hover:text-orange-500 cursor-pointer"
              >
                {p.title}
              </h4>

              {/* PRICE */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-orange-500 font-semibold">
                  ${p.price}
                </span>
                {p.oldPrice && (
                  <span className="text-xs line-through text-gray-400">
                    ${p.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* EMPTY STATE */}
          {visibleProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}
      {quickView && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setQuickView(null)}
        >
          <div
            className="bg-white w-[90%] max-w-lg rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={quickView.image}
              className="h-48 mx-auto object-contain"
            />

            <h3 className="mt-4 font-semibold">
              {quickView.title}
            </h3>

            <p className="text-orange-500 font-bold mt-2">
              ${quickView.price}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                className="flex-1 bg-orange-500 text-white py-2 rounded-lg"
                onClick={() =>
                  addToCart({ ...quickView, qty: 1 })
                }
              >
                Add to Cart
              </button>

              <button
                className="flex-1 border rounded-lg"
                onClick={() =>
                  navigate(`/product/${quickView.id}`)
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= ACTION BUTTON ================= */
const ActionBtn = ({ icon, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-9 h-9 rounded-full shadow flex items-center justify-center transition
      ${active
        ? "bg-red-500 text-white"
        : "bg-white hover:bg-orange-500 hover:text-white"
      }`}
  >
    {icon}
  </button>
);
