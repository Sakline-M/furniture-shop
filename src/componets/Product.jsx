"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiShoppingCart, FiHeart, FiShuffle } from "react-icons/fi";

const products = [
  // Same product data...
  {
    id: 1,
    name: "Rivet Mid Century Lamp",
    image: "sofa-product-one.jpg",
    price: "$80.99",
  },
  {
    id: 2,
    name: "Fox Throw Pillow",
    image: "preview.jpg",
    price: "$80.99",
  },
  {
    id: 3,
    name: "Retro Sofa",
    image: "sofa-product-two.jpg",
    price: "$80.99",
  },
  {
    id: 4,
    name: "Tiffany Lamp",
    image: "almira-product-three.jpg",
    price: "$80.99",
  },
  {
    id: 5,
    name: "Modern Chair",
    image: "almira-product-three.jpg",
    price: "$80.99",
  },
  {
    id: 6,
    name: "Minimal Desk",
    image: "sofa-product-two.jpg",
    price: "$80.99",
  },
  {
    id: 7,
    name: "Stylish Vase",
    image: "sofa-product-one.jpg",
    price: "$80.99",
  },
  {
    id: 8,
    name: "Artistic Frame",
    image: "preview.jpg",
    price: "$80.99",
  },
  {
    id: 9,
    name: "Cozy Rug",
    image: "almira-product-three.jpg",
    price: "$80.99",
  },
  {
    id: 10,
    name: "Wall Clock",
    image: "sofa-product-two.jpg",
    price: "$80.99",
  },
  {
    id: 11,
    name: "Classic Bookshelf",
    image: "sofa-product-one.jpg",
    price: "$80.99",
  },
  {
    id: 12,
    name: "Pendant Light",
    image: "sofa-product-two.jpg",
    price: "$80.99",
  },
];

const categories = ["NEW ARRIVAL", "BEST SELLERS", "SALE OFF"];

const HoverButton = ({ icon }) => (
  <button className="bg-white rounded-full shadow w-9 h-9 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110">
    {icon}
  </button>
);

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("NEW ARRIVAL");

  return (
    <div className="w-full px-4 py-10">
      {/* Header with Dynamic Tabs */}
      <div className="flex justify-center text-[12px] gap-3 lg:gap-6 md:gap-6 text-center lg:mb-10 md:mb-10">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut",  delay: 0.2 }}
            viewport={{ once: false }}
            className={`flex flex-row lg:text-3xl md:text-2xl transition-all font-semibold ${
              activeCategory === category
                ? "text-gray-800 underline underline-offset-4 decoration-rose-400"
                : "text-gray-400 font-light hover:text-rose-400"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-base-100 p-4 lg:p-6 group  hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Buttons */}
              <div className="absolute right-2 top-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                <HoverButton icon={<FiEye />} />
                <HoverButton icon={<FiShoppingCart />} />
                <HoverButton icon={<FiHeart />} />
                <HoverButton icon={<FiShuffle />} />
              </div>
            </div>

            {/* Text */}
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
