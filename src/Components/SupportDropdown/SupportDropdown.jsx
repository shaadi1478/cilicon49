import React, { useState } from "react";
import { toast } from "react-toastify";

const SupportDropdown = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
      >
        Customer Support / Need Help
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded p-4 z-50">
          {/* Contact Info */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <p>Phone: +1 202-555-0104</p>
            <p>Email: support@clicon.com</p>
            <p>Hours: Mon - Fri: 9 AM - 6 PM</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>

          {/* FAQs */}
          <div className="mt-4 border-t pt-2 space-y-2">
            <h4 className="font-semibold">FAQ</h4>
            <p className="text-sm">Q: How do I track my order? <br/>A: Use the Track Order page with your order ID.</p>
            <p className="text-sm">Q: Can I return a product? <br/>A: Yes, within 14 days following our return policy.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportDropdown;
