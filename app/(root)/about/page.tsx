"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Foodie</h1>
          <p className="text-lg leading-relaxed">
            Your go-to platform for discovering and savoring the best dishes from around the world.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/image.jpg" // Replace with your image
              alt="About Foodie"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-orange-600">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Foodie, we believe that every meal has a story. We started our journey with a simple mission:
              to bring food lovers together through the joy of discovery. Whether it's a traditional dish or a
              modern delicacy, our platform connects you with culinary treasures from every corner of the globe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join us on this delicious adventure as we celebrate flavors, cultures, and the art of dining.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold mb-8 text-orange-600">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion for Food</h3>
              <p className="text-gray-600">
                We live and breathe food, constantly exploring new flavors and cuisines to share with you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
              <p className="text-gray-600">
                Foodie is built for food lovers, by food lovers. We foster a community that shares and cares.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Celebrating Diversity</h3>
              <p className="text-gray-600">
                Food unites us all. We embrace the rich culinary diversity that makes every dish special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Join the Foodie Community</h2>
          <p className="text-lg leading-relaxed mb-8">
            Discover your next favorite meal, connect with fellow food enthusiasts, and share your own culinary adventures.
          </p>
          <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
