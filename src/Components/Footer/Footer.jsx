import React from "react";
import Icon from '../../assets/icon.png'
import Apple from '../../assets/Apple.png'
import PlayStor from '../../assets/play.png'

const Footer = () => {
    return (
        <footer className="bg-[#191C1F] text-gray-300 px-6 lg:px-12 py-12 tracking-wide">

            {/* Grid Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

                {/* Logo & Contact */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={Icon} alt="logo" className="w-8 h-8" />
                        <h2 className="text-[28px] md:text-[32px] font-bold">CLICON</h2>
                    </div>

                    <p className="text-sm">Customer Supports:</p>
                    <p className="text-base font-semibold mb-2">(629) 555-0129</p>
                    <p className="text-sm leading-relaxed">
                        4517 Washington Ave.<br />Manchester, Kentucky 39495
                    </p>
                    <p className="mt-3 text-sm">info@kinbo.com</p>
                </div>

                {/* Top Category */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">TOP CATEGORY</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Computer & Laptop</li>
                        <li>SmartPhone</li>
                        <li>Headphone</li>
                        <li>Accessories</li>
                        <li>Camera & Photo</li>
                        <li>TV & Homes</li>
                        <li className="text-orange-400 cursor-pointer">Browse All Product →</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Shop Product</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        <li>Compare</li>
                        <li>Track Order</li>
                        <li>Customer Help</li>
                        <li>About Us</li>
                    </ul>
                </div>

                {/* Download App */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">DOWNLOAD APP</h3>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 p-2 bg-gray-800 rounded-lg cursor-pointer">
                            <img src={PlayStor} alt="" />

                            <div>
                                <p className="text-xs">Get it now</p>
                                <p className="text-sm font-semibold">Google Play</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-2 bg-gray-800 rounded-lg cursor-pointer">
                            <img src={Apple} alt="" />

                            <div>
                                <p className="text-xs">Get it now</p>
                                <p className="text-sm font-semibold">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Tags */}
                <div className="hidden md:block">
                    <h3 className="text-lg font-semibold mb-4">POPULAR TAG</h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                        {[
                            'Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook',
                            'SSD', 'Graphics Card', 'Power Bank', 'Smart TV',
                            'Speaker', 'Tablet', 'Microwave', 'Samsung'
                        ].map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-800 rounded-md cursor-pointer hover:bg-gray-700 transition"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
                  &copy; 2025 Kinbo eCommerce. Developed by Sheikh Sadi.
            </div>
        </footer>
    );
};

export default Footer;
