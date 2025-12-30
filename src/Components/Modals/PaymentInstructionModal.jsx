import React, { useState } from "react";

const paymentInfo = {
  bkash: {
    title: "bKash Payment",
    number: "01956686338",
  },
  nagad: {
    title: "Nagad Payment",
    number: "01956686338",
  },
  rocket: {
    title: "Rocket Payment",
    number: "01956686338",
  },
};

const PaymentInstructionModal = ({ method, onClose, onConfirm }) => {
  const [reference, setReference] = useState("");
  const info = paymentInfo[method];

  const handleConfirm = () => {
    if (!reference.trim()) {
      alert("Please enter transaction/reference ID");
      return;
    }

    onConfirm(reference); // send reference to parent
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative animate-scaleIn">
        
        {/* HEADER */}
        <h2 className="text-xl font-bold text-center mb-2">
          {info.title}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Send payment to the number below and enter transaction ID
        </p>

        {/* PAYMENT NUMBER */}
        <div className="bg-gray-100 rounded-lg p-3 text-center mb-4">
          <p className="text-sm text-gray-500">Send Money To</p>
          <p className="text-lg font-semibold">{info.number}</p>
        </div>

        {/* REFERENCE INPUT */}
        <input
          type="text"
          placeholder="Transaction / Reference ID"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 mb-4"
        />

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 border rounded-lg py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="w-1/2 bg-orange-500 text-white rounded-lg py-2 hover:bg-orange-600"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructionModal;
