import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <CheckCircle size={80} className="text-green-500 mb-6" />
      <h1 className="text-2xl font-bold mb-2 text-center">Your order is successfully placed</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. 
        Donec volutpat mollis nulla non facilisis.
      </p>
      <div className="flex gap-4">
        <Link to="/dashboard">
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition">
            GO TO DASHBOARD
          </button>
        </Link>
        <Link to="/order">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            VIEW ORDER →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
