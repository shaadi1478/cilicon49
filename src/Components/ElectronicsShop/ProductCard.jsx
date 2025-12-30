import { Heart, ShoppingCart } from "lucide-react";
import { useCart, useWishlist } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="group bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
      {/* IMAGE */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-contain p-4"
        />
      </Link>

      {/* HOVER ACTIONS */}
      <div
        className="
          absolute inset-0 bg-black/40 flex items-center justify-center gap-3
          opacity-0 group-hover:opacity-100 transition
        "
      >
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
          title="Add to Cart"
        >
          <ShoppingCart size={18} />
        </button>

        <button
          onClick={() => toggleWishlist(product)}
          className={`p-3 rounded-full ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:text-red-500"
          }`}
          title="Add to Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? "white" : "none"} />
        </button>
      </div>

      {/* INFO */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-orange-500 font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
