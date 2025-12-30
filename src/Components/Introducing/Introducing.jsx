import React from 'react'
import speaker from '../../assets/speaker.png'
import xiaomi from '../../assets/xiaomi.png'

const Introducing = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* Left Card */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <h2 className="text-lg uppercase font-semibold bg-blue-400 px-3 py-1.5 inline-block">
                Introducing
              </h2>
              <h2 className="text-2xl md:text-[32px] font-semibold pt-2 pb-3">
                New Apple Homepod Mini
              </h2>
              <p className="pb-5 text-[16px] max-w-md">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
              <button className="bg-orange-400 text-white px-4 uppercase font-semibold py-2 rounded hover:bg-orange-500 transition">
                Shop Now
              </button>
            </div>

            <div>
              <img
                src={speaker}
                alt=""
                className="w-56 sm:w-64 md:w-auto"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-gray-800 flex flex-col md:flex-row gap-6 h-auto md:h-[336px] items-start px-6 md:px-11 pt-6 md:pt-11">
            <div>
              <h2 className="text-lg font-semibold bg-amber-300 px-3 py-1.5 w-fit uppercase">
                Introducing new
              </h2>
              <h2 className="text-2xl md:text-[32px] text-white font-semibold pt-2">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h2>
              <p className="text-white pt-3 pb-5 max-w-md">
                Data provided by internal laboratories. Industry measurment.
              </p>
              <button className="bg-orange-400 text-white uppercase font-semibold px-4 py-2 rounded hover:bg-orange-500 transition">
                Shop Now
              </button>
            </div>

            <div>
              <img
                src={xiaomi}
                alt=""
                className="w-56 sm:w-64 md:h-73 md:w-auto h-38"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Introducing
