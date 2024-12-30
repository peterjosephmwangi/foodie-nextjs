"use client"
import React, { useState, useEffect, useRef } from 'react';

const SlideWithOverlay = () => {
  // State to track visibility of the section
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

   // Array of possible titles
   const titles = [
    "Discover Our Delicious Dishes",
    "Taste the Best Dishes Around",
    "Explore Our Tasty Offerings",
    "Savor the Flavors of Our Menu",
    "Indulge in Our Delicious Creations",
  ];

  // Function to get a random title
  const getRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };

  // Intersection Observer to handle scroll visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Section is in view, make heading visible
        } else {
          setIsVisible(false); // Section is out of view, hide heading
        }
      },
      { threshold: 0.5 } // 50% of the section should be visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const items = [
    { id: 1, src: "/images/image.jpg", alt: "Delicious Dish 1", title: "Delicious Dish 1", description: "A brief description of the delicious dish goes here." },
    { id: 2, src: "/images/image1.jpg", alt: "Delicious Dish 2", title: "Delicious Dish 2", description: "A brief description of another delicious dish goes here." },
    { id: 3, src: "/images/image2.jpg", alt: "Delicious Dish 3", title: "Delicious Dish 3", description: "Another description of a delicious dish." },
    { id: 4, src: "/images/image3.jpg", alt: "Delicious Dish 2", title: "Delicious Dish 2", description: "A brief description of another delicious dish goes here." },
  ];

  return (
    <>
      {/* Elegant Heading Section */}
      <section
        ref={sectionRef}
        className={`bg-orange-400 text-white py-2 mt-2 px-4 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-3xl font-semibold mb-4">{getRandomTitle()}</h2>
        
      </section>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {items.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with Overlay */}
            <div className="relative">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideWithOverlay;
