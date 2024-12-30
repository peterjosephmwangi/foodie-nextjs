"use client";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQsPage = () => {
  const faqs = [
    {
      question: "What is Foodie?",
      answer: "Foodie is your ultimate culinary companion, offering recipes, personalized meal plans, catering services, and more to enhance your love for food.",
    },
    {
      question: "Do you offer personalized meal plans?",
      answer: "Yes! Our team of experts can craft meal plans tailored to your dietary preferences and needs.",
    },
    {
      question: "Can I book catering services online?",
      answer: "Absolutely! You can book catering services directly through our website by providing your event details.",
    },
    {
      question: "Are your recipes beginner-friendly?",
      answer: "Yes, we have recipes suitable for all skill levels, from beginner to advanced cooks.",
    },
    {
      question: "What are the payment methods you accept?",
      answer: "We accept major credit cards, debit cards, and other secure online payment options.",
    },
    {
      question: "How can I contact Foodie for support?",
      answer: "You can reach out to us through the Contact page on our website or email us at support@foodie.com.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-4">FAQs</h1>
          <p className="text-lg leading-relaxed">
            Got questions? We’ve got answers! Find all the information you need about Foodie below.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-orange-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can’t find the answer you’re looking for? Get in touch with us, and we’ll be happy to help!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
