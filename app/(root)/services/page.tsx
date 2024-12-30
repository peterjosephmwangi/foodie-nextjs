"use client";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg leading-relaxed">
            Discover the range of culinary experiences and services we offer to food enthusiasts like you.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="mb-6">
              <img
                src="/images/image.jpg" // Replace with your image
                alt="Online Recipes"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Online Recipes</h3>
            <p className="text-gray-600">
              Explore a wide variety of recipes from around the world, curated by expert chefs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="mb-6">
              <img
                src="/images/image2.jpg" // Replace with your image
                alt="Personalized Meal Plans"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Personalized Meal Plans
            </h3>
            <p className="text-gray-600">
              Get meal plans tailored to your dietary needs and preferences by our expert team.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="mb-6">
              <img
                src="/images/image1.jpg" // Replace with your image
                alt="Catering Services"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Catering Services</h3>
            <p className="text-gray-600">
              Make your events unforgettable with our professional and delicious catering options.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl font-semibold text-orange-600 mb-8">
            Why Choose Foodie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Chefs</h3>
              <p className="text-gray-600">
                Learn from top chefs with years of experience in global cuisines.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Ingredients
              </h3>
              <p className="text-gray-600">
                Every recipe is crafted with fresh and high-quality ingredients.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Enjoy premium services at competitive and affordable prices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                Join a community of food lovers who share your passion for cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg leading-relaxed mb-8">
            Dive into the world of food with Foodie. Whether you're a beginner or a connoisseur, we have something for you.
          </p>
          <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition">
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
