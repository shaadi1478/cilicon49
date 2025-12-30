import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart, useWishlist } from "../Context/CartContext";
import ProductSkeleton from "./ProductSkeleton";
import ProductHighlights from "../ProductHighlights/ProductHighlights";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === Number(id));
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.image);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ProductSkeleton />;
  if (!product) return <p className="text-center">Product not found</p>;

  const liked = wishlist.some((p) => p.id === product.id);

  

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    toast.success(`${product.title} added to cart!`);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.info(liked ? `${product.title} removed from wishlist` : `${product.title} added to wishlist`);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-gray-600 hover:text-orange-500"
        >
          ← Back to products
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Images */}
            <div>
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-[380px] md:h-[420px] object-contain shadow-md hover:shadow-xl rounded"
              />

              <div className="flex gap-3 mt-4 overflow-x-auto">
                {[product.image, product.image, product.image, product.image].map(
                  (img, i) => (
                    <div
                      key={i}
                      onClick={() => setMainImage(img)}
                      className={`min-w-[64px] h-16 border rounded flex items-center justify-center cursor-pointer ${mainImage === img ? "border-orange-500" : ""}`}
                    >
                      <img src={img} alt="thumb" className="h-12 object-contain" />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-orange-500">★★★★☆</span>
                <span className="text-gray-500">(21,671 reviews)</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <span className="line-through text-gray-400">$1999</span>
                <span className="bg-yellow-300 text-xs px-2 py-1 rounded">21% OFF</span>
              </div>

              <p className="text-gray-600 text-sm">{product.description.slice(0, 140)}...</p>

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium mb-1">Quantity</p>
                <div className="flex items-center w-fit border rounded">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1">−</button>
                  <span className="px-4">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1">+</button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded w-full"
                >
                  ADD TO CART
                </button>

                <button
                  onClick={handleWishlist}
                  className={`border px-6 py-3 rounded w-full ${liked ? "bg-red-500 text-white" : "text-gray-700"}`}
                >
                  {liked ? "WISHLISTED" : "ADD TO WISHLIST"}
                </button>
              </div>

              <div className="border-t pt-4 text-sm space-y-1">
                <p>✔ Free Shipping & Fast Delivery</p>
                <p>✔ 100% Money-back Guarantee</p>
                <p>✔ Secure Payment</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex gap-6 text-sm font-medium border-b justify-center">
              {["description", "specification", "reviews"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 capitalize ${tab === t ? "border-b-2 border-orange-500" : "text-gray-500"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-600">
              {tab === "description" && <p>{product.description}</p>}
              {tab === "specification" && (
                <ul className="list-disc ml-5 space-y-1">
                  <li>Premium build quality</li>
                  <li>1 year warranty</li>
                  <li>Fast shipping worldwide</li>
                </ul>
              )}
              {tab === "reviews" && <p>No reviews yet.</p>}
            </div>
          </div>
        </motion.div>

        {/* Sticky Mobile Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-3 flex gap-2 z-50">
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white w-full py-3 rounded"
          >
            Add to Cart
          </button>

          <button
            onClick={handleWishlist}
            className={`border px-4 rounded ${liked ? "bg-red-500 text-white" : ""}`}
          >
            ♥
          </button>
        </div>
        <ProductHighlights />
      </div>
    </>
  );
};

export default ProductDetails;
