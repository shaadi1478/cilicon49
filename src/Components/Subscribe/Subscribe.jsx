import google from "../../assets/google.png";
import amazon from "../../assets/amazon.png";
import philips from "../../assets/philips.png";
import toshiba from "../../assets/toshiba.png";
import samsung from "../../assets/samsungs.png";

const Subscribe = () => {
  return (
    <section className="bg-[#1e6794] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm text-white/80 mt-2 max-w-2xl mx-auto">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et
          cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>

        {/* Input */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-105 px-4 py-3 rounded focus:outline-none bg-white"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition flex items-center gap-2">
            SUBSCRIBE
            <span>→</span>
          </button>
        </div>

        {/* Brands */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6  py-5">
          <img src={google} alt="Google" className=" object-contain opacity-90" />
          <img src={amazon} alt="Amazon" className=" object-contain opacity-90" />
          <img src={philips} alt="Philips" className=" object-contain opacity-90" />
          <img src={toshiba} alt="Toshiba" className=" object-contain opacity-90" />
          <img src={samsung} alt="Samsung" className=" object-contain opacity-90" />
        </div>

      </div>
    </section>
  );
};

export default Subscribe;
