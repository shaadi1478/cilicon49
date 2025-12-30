import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PaymentInstructionModal from "../Modals/PaymentInstructionModal";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../Context/AuthContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showModal, setShowModal] = useState(false);

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  /* 🔐 LOGIN GUARD (CORRECT WAY) */
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
    }
  }, [user, navigate]);

  if (!user) return null;

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling({ ...billing, [name]: value });
  };

  /* ---------------- PRICE CALC (SAFE) ---------------- */
  const subTotal = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    return sum + price * qty;
  }, 0);

  const discount = 2;
  const tax = Number((subTotal * 0.1937).toFixed(2));
  const total = Number((subTotal + tax - discount).toFixed(2));

  /* ---------------- SAVE ORDER ---------------- */
  const saveOrder = async (paymentRef = "") => {
    await addDoc(collection(db, "orders"), {
      userId: user.uid,
      customerName: `${billing.firstName} ${billing.lastName}`,
      email: billing.email,
      phone: billing.phone,
      address: billing.address,
      items: cart,
      paymentMethod,
      paymentRef,
      total,
      status: "pending",
      createdAt: Timestamp.now(),
    });
  };

  /* ---------------- PLACE ORDER ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (["bkash", "nagad", "rocket"].includes(paymentMethod)) {
      setShowModal(true);
      return;
    }

    await saveOrder("");
    toast.success("🎉 Order placed successfully!");
    clearCart();
    setTimeout(() => navigate("/order-success"), 1200);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        {/* ================= BILLING ================= */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-6 rounded-xl shadow space-y-6"
        >
          <h2 className="text-2xl font-bold border-b pb-2">
            Billing Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg"
            />
          </div>

          <input
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg"
            />
            <input
              name="phone"
              placeholder="Phone"
              required
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg"
            />
          </div>

          {/* PAYMENT METHOD */}
          <div>
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { key: "cash", label: "Cash on Delivery" },
                { key: "bkash", label: "bKash" },
                { key: "nagad", label: "Nagad" },
                { key: "rocket", label: "Rocket" },
                { key: "card", label: "Card" },
              ].map((m) => (
                <label
                  key={m.key}
                  className={`flex items-center gap-2 border px-3 py-2 rounded-lg cursor-pointer ${
                    paymentMethod === m.key
                      ? "border-orange-500 bg-orange-50"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    checked={paymentMethod === m.key}
                    onChange={() => setPaymentMethod(m.key)}
                  />
                  {m.label}
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            PLACE ORDER →
          </button>
        </form>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg sticky top-24">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold">Order Summary</h3>
          </div>

          <div className="p-6 space-y-4 max-h-[320px] overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.qty || 1}
                  </p>
                </div>
                <p className="font-semibold text-sm">
                  ${(Number(item.price) * (Number(item.qty) || 1)).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t p-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>Total</span>
              <span className="text-orange-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAYMENT MODAL ================= */}
      {showModal && (
        <PaymentInstructionModal
          method={paymentMethod}
          onClose={() => setShowModal(false)}
          onConfirm={async (ref) => {
            await saveOrder(ref);
            toast.success("🎉 Payment confirmed!");
            clearCart();
            setShowModal(false);
            setTimeout(() => navigate("/order-success"), 1200);
          }}
        />
      )}
    </>
  );
};

export default CheckoutPage;
