// components/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-6">
              We are a passionate team of innovators dedicated to crafting solutions that empower individuals and organizations. With a focus on technology and creativity, we strive to deliver excellence and build meaningful connections.
            </p>
            <p className="text-lg lg:text-xl text-gray-300">
              Our mission is to transform ideas into reality, leveraging cutting-edge tools and strategies. Join us on our journey to make a positive impact on the world.
            </p>
          </div>

          {/* Right Section: Image/Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 rounded-xl blur-xl opacity-20"></div>
            <img
              src="/about-us-image.jpg"
              alt="About Us Visual"
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
