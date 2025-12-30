import React from "react";

const products = [
  {
    title: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    price: "$899.00",
    soldBy: "Clicon",
    brand: "StarTech",
    model: "ARES M2 and ZEUS E2",
    stock: "IN STOCK",
    size: "6.71 inches, 110.5 cm",
    weight: "650 g (7.41 oz)",
    rating: 4.5,
    reviews: "51,746,385",
    inStock: true
  },
  {
    title: "Apple iMac 24\" 4K Retina Display M1 8 Core CPU, 8 Core GPU, 256GB SSD, Blue (MGPX3ZP/A) 2021",
    price: "$1,699.00",
    soldBy: "Apple",
    brand: "Apple",
    model: "Apple iMac 24\" M1 Blue 2021",
    stock: "IN STOCK",
    size: "6.7 inches, 109.8 cm",
    weight: "240 g (8.47 oz)",
    rating: 4.5,
    reviews: "673,971,743",
    inStock: true
  },
  {
    title: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display",
    price: "$699.99",
    soldBy: "Clicon",
    brand: "Samsung",
    model: "S21 FE",
    stock: "OUT OF STOCK",
    size: "6.4 inches, 98.9 cm",
    weight: "177 g (6.24 oz)",
    rating: 4.5,
    reviews: "96,459,761",
    inStock: false
  }
];

const ProductComparison = () => {
  return (
    <div className="overflow-x-auto p-4 max-w-7xl mx-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left"></th>
            {products.map((product, index) => (
              <th key={index} className="p-4 text-left border-l border-gray-200">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{product.title}</h3>
                  <button
                    className={`px-4 py-2 rounded text-white ${
                      product.inStock ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!product.inStock}
                  >
                    ADD TO CART
                  </button>
                  <span className="text-gray-500 text-sm">
                    {product.rating} ★ ({product.reviews})
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {["Price", "Sold by", "Brand", "Model", "Stock status", "Size", "Weight"].map((label, i) => (
            <tr key={i} className="text-gray-700">
              <td className="p-4 font-medium">{label}</td>
              {products.map((product, index) => (
                <td key={index} className="p-4 border-l border-gray-200">
                  {label === "Stock status" ? (
                    <span className={product.inStock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                      {product.stock}
                    </span>
                  ) : (
                    product[label.toLowerCase().replace(/ /g, "")]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
