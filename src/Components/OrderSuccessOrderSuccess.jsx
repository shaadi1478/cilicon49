import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center animate-scaleIn">
        
        <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-2">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/profile"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            View Orders
          </Link>

          <Link
            to="/"
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
