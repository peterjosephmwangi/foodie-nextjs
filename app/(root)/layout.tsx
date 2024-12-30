"use client";
import React from "react";
import Navbar from "@/components/Navbar"; // Adjust the path if your Navbar is located elsewhere
import Footer from "@/components/Footer"; // Adjust the path if your Footer is located elsewhere

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
