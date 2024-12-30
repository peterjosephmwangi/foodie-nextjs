"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg leading-relaxed">
            Have questions, suggestions, or just want to say hi? We’d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Contact Details</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us directly through any of the following:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21H3m6 0v-7M5 4h2M17 21v-8h5M17 10h5m-5-6v3m0 0v3m-4-3h8M13 4v3"
                  />
                </svg>
                <span className="text-gray-800">123 Foodie Street, Flavor Town</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21H3m6 0v-7M5 4h2M17 21v-8h5M17 10h5m-5-6v3m0 0v3m-4-3h8M13 4v3"
                  />
                </svg>
                <span className="text-gray-800">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21H3m6 0v-7M5 4h2M17 21v-8h5M17 10h5m-5-6v3m0 0v3m-4-3h8M13 4v3"
                  />
                </svg>
                <span className="text-gray-800">support@foodie.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-orange-600 text-center mb-8">
      Visit Us
    </h2>
    <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg">
      {/* Google Map centered on Kenya */}
      <iframe
        title="Kenya Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090185.345273514!2d34.51782066504522!3d-0.02355924731660735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f42b567d8c8b9%3A0xa28e28f6ee3d4da5!2sKenya!5e0!3m2!1sen!2sus!4v1686611425484!5m2!1sen!2sus"
        className="w-full h-full rounded-lg"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactPage;
