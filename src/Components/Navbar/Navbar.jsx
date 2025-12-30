import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  User,
  ShoppingCart,
  Truck,
  RefreshCcw,
  Headphones,
  HelpCircle,
  Trash2,
  ChevronDown,
} from "lucide-react";
import { RiPhoneLine } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";


import logo from "../../assets/logo.png";
import { useCart, useWishlist } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const cartRef = useRef(null);
  const cartBtnRef = useRef(null);
  const userRef = useRef(null);
  const navClass = ({ isActive }) =>
    `flex items-center gap-1 transition ${isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
    }`;


  const { cart, addToCart, removeFromCart, removeItem } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();

  const cartCount = cart.reduce((a, b) => a + (b.qty || 1), 0);
  const cartTotal = cart.reduce(
    (a, b) => a + b.price * (b.qty || 1),
    0
  );

  // outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        !cartBtnRef.current.contains(e.target)
      ) {
        setCartOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="bg-[#0B4A78] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-9 h-9" />
            <span className="text-xl font-semibold tracking-wide">
              CLICON
            </span>
          </Link>

          {/* CENTER MENU (SEARCH REMOVED) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/shop" className={navClass}>
              <AiFillProduct size={16}/>  Browse All Product
            </NavLink>

            <NavLink to="/trackorder" className={navClass}>
              <Truck size={16} /> Track Order
            </NavLink>

            <NavLink to="/compair" className={navClass}>
              <RefreshCcw size={16} /> Compare
            </NavLink>

            <NavLink to="/support" className={navClass}>
              <Headphones size={16} /> Support
            </NavLink>

            <NavLink to="/help" className={navClass}>
              <HelpCircle size={16} /> Help
            </NavLink>

          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6">
            {/* Wishlist */}
            <div className="relative flex items-center">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-orange-500 px-1.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="relative" ref={cartBtnRef}>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="flex items-center gap-1"
              >
                <ShoppingCart size={20} />
                <span className="hidden md:block text-sm">Cart</span>
              </button>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-orange-500 px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}

              {cartOpen && (
                <div
                  ref={cartRef}
                  className="absolute right-0 mt-3 w-80 bg-white text-gray-800 shadow-xl rounded-lg p-4 border"
                >
                  {cart.length === 0 ? (
                    <p className="text-center text-sm">Cart is empty</p>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center mb-3"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              {item.title}
                            </p>
                            <div className="flex gap-2 mt-1">
                              <button onClick={() => removeFromCart(item.id)}>-</button>
                              <button onClick={() => addToCart(item)}>+</button>
                              <button onClick={() => removeItem(item.id)}>
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                          <p className="text-sm font-semibold">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                        </div>
                      ))}
                      <hr />
                      <p className="font-semibold mt-2 text-sm">
                        Total: ${cartTotal.toFixed(2)}
                      </p>
                      <Link to="/checkout">
                        <button
                          onClick={() => setCartOpen(false)}
                          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-md text-sm font-semibold mt-3"
                        >
                          Checkout
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* USER */}
            {user ? (
              <div ref={userRef} className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User size={20} />
                  )}
                  <span className="hidden md:block text-sm">
                    {user.displayName || "User"}
                  </span>
                  <ChevronDown size={16} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-white border rounded-md shadow-lg">
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-1">
                <User size={20} />
                <span className="hidden md:block text-sm">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
