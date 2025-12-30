import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart, useWishlist } from "../Context/CartContext";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    fetch("/product.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id));
        setProduct(found);
        setMainImage(found?.image);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!product) return <p className="text-center mt-20">Product not found</p>;

  const liked = wishlist.some(i => i.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    toast.success("Added to cart");
  };

  const handleBuyNow = () => {
    addToCart({ ...product, qty });
    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto p-6 bg-white rounded shadow"
    >
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 mb-4"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-[420px] object-contain rounded border"
          />
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <div className="flex items-center gap-2 text-sm text-yellow-500">
            ★★★★☆ <span className="text-gray-400">(120 reviews)</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">
              ${product.price}
            </span>
            <span className="line-through text-gray-400">$999</span>
            <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded">
              20% OFF
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            {product.description}
          </p>

          {/* QTY */}
          <div>
            <p className="text-sm font-medium mb-1">Quantity</p>
            <div className="flex items-center border rounded w-fit">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="px-3 py-1"
              >−</button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="px-3 py-1"
              >+</button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded w-full"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-3 rounded w-full"
            >
              Buy Now
            </button>
          </div>

          <button
            onClick={() => toggleWishlist(product)}
            className={`text-sm mt-2 ${
              liked ? "text-red-500" : "text-gray-500"
            }`}
          >
            ♥ {liked ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>

          <div className="border-t pt-4 text-sm space-y-1 text-gray-600">
            <p>✔ Free Delivery</p>
            <p>✔ 7 Days Return</p>
            <p>✔ Secure Payment</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
