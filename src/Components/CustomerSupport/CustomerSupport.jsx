import React, { useState } from "react";
import { toast } from "react-toastify";

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate your API to send the message
    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Support</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Need help? Reach out to our support team and we’ll assist you.</p>
          <div>
            <p className="font-medium">Phone:</p>
            <p>+1 202-555-0104</p>
          </div>
          <div>
            <p className="font-medium">Email:</p>
            <p>support@clicon.com</p>
          </div>
          <div>
            <p className="font-medium">Working Hours:</p>
            <p>Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded p-6 space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Q: How do I track my order?</p>
            <p>A: You can track your order from the "Track Order" page using your order ID.</p>
          </div>
          <div>
            <p className="font-medium">Q: Can I return or exchange a product?</p>
            <p>A: Yes, you can return or exchange within 14 days of delivery, following our return policy.</p>
          </div>
          <div>
            <p className="font-medium">Q: How can I contact support?</p>
            <p>A: You can call, email, or use the contact form above to reach us directly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
