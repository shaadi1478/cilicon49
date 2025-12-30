import { Heart, ShoppingCart } from "lucide-react";
import { useCart, useWishlist } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();
  const imgRef = useRef(null);

  const isWishlisted = wishlist.some(i => i.id === product.id);

  const handleAdd = () => {
    addToCart({ ...product, qty: 1 });
    toast.success("Added to cart");

    // Fly animation
    imgRef.current.classList.add("animate-fly");
    setTimeout(() => imgRef.current.classList.remove("animate-fly"), 700);
  };

  return (
    <div className="relative bg-white rounded-xl shadow hover:shadow-md transition p-3">

      {/* ⏱️ LIMITED STOCK */}
      {product.stock <= 5 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Only {product.stock} left
        </span>
      )}

      <Link to={`/product/${product.id}`}>
        <motion.img
          ref={imgRef}
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain p-4"
          whileHover={{ scale: 1.05 }}
        />
         <h3 className="text-sm font-medium line-clamp-2 mt-2">
        {product.title.slice(0, 25)}...
      </h3>

      </Link>

      {/* ⭐ RATING */}
      <div className="text-orange-400 text-xs mt-1">
        ★★★★☆ <span className="text-gray-500">(21k)</span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">${product.price}</p>

        <button onClick={() => toggleWishlist(product)}>
          <Heart
            size={18}
            fill={isWishlisted ? "red" : "none"}
            className="text-red-500"
          />
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
