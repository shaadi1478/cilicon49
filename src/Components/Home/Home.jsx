import React from 'react';
import consoles from '../../assets/consoles.png';
import PixelPro from '../../assets/pixel.png';
import AirBuds from '../../assets/AirBuds.png';
import Category from '../Category/Category';
import Features from '../Features/Features';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Introducing from '../Introducing/Introducing';
import ProductHighlights from '../ProductHighlights/ProductHighlights';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-12">

        {/* Main Banner */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg lg:w-2/3">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-sm uppercase text-gray-500 mb-2">
              THE BEST PLACE TO PLAY
            </h4>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Xbox Consoles
            </h1>
            <p className="text-gray-700 mb-4">
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
            </p>
            <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
              Shop Now
            </button>
          </div>

          <div className="flex-1">
            <img
              src={consoles}
              alt="Xbox Consoles"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Secondary Banners */}
        <div className="flex flex-col gap-6 lg:w-1/3 ">
          {/* Google Pixel */}
          <div className="flex flex-col sm:flex-row bg-gray-900 p-4 rounded-lg items-center gap-4 h-62">
            <div className="text-center sm:text-left">
              <h3 className="text-sm uppercase text-amber-300 mb-1">
                Summer Sales
              </h3>
              <h2 className="text-2xl font-semibold mb-2 text-white">
                New Google Pixel 6 Pro
              </h2>
              <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
                Shop Now
              </button>
            </div>

            <div>
              <img
                src={PixelPro}
                alt="Google Pixel 6 Pro"
                className="w-full  rounded-lg"
              />
            </div>
          </div>

          {/* Xiaomi FlipBuds */}
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 h-62">
            <div className="flex-1">
              <img
                src={AirBuds}
                alt="Xiaomi FlipBuds Pro"
                className="w-full rounded-lg"
              />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-2">
                Xiaomi FlipBuds Pro
              </h2>
              <p className="text-gray-700 mb-2">
                $299 USD
              </p>
              <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
                Shop Now
              </button>
            </div>
          </div>

        </div>
      </div>

      <Features />
      <Category />
      <FeaturedProducts />
      <Introducing />
      <ProductHighlights />
      <Subscribe />
    </div>
  );
};

export default Home;
