import React from "react";

const TrackOrder = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-2">Track Order</h2>
      <p className="text-gray-600 mb-6">
        To track your order please enter your order ID in the input field below and press the{" "}
        <span className="font-medium">“Track Order”</span> button. This was given to you on your receipt and in the confirmation email you should have received.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="orderId" className="mb-1 font-medium text-gray-700">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            placeholder="ID..."
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <span className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h.01M12 20h.01" />
            </svg>
            Order ID that we sent to your email address.
          </span>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Billing Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </form>

      <button
        type="submit"
        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        TRACK ORDER &rarr;
      </button>
    </div>
  );
};

export default TrackOrder;
