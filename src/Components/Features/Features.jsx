import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiTrophy } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Fast Delivery */}
        <div className="group flex items-center gap-4 border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500">
          <TbTruckDelivery className="text-4xl text-black transition-colors duration-300 group-hover:text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">
              Fast Delivery
            </h5>
            <p className="text-sm text-gray-600">Delivery in 24/H</p>
          </div>
        </div>

        {/* Return */}
        <div className="group flex items-center gap-4 border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500">
          <CiTrophy className="text-4xl text-black transition-colors duration-300 group-hover:text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">
              24 Hours Return
            </h5>
            <p className="text-sm text-gray-600">
              100% money-back guarantee
            </p>
          </div>
        </div>

        {/* Payment */}
        <div className="group flex items-center gap-4 border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500">
          <MdPayment className="text-4xl text-black transition-colors duration-300 group-hover:text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">
              Secure Payment
            </h5>
            <p className="text-sm text-gray-600">Your money is safe</p>
          </div>
        </div>

        {/* Support */}
        <div className="group flex items-center gap-4 border rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500">
          <BiSupport className="text-4xl text-black transition-colors duration-300 group-hover:text-orange-500" />
          <div>
            <h5 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">
              Support 24/7
            </h5>
            <p className="text-sm text-gray-600">
              Live contact / message
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
