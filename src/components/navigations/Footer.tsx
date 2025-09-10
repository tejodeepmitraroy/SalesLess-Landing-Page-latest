"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Background gradient and watermark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139, 69, 19, 0.3) 0%, rgba(55, 48, 163, 0.4) 30%, rgba(0, 0, 0, 1) 70%)",
        }}
      />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] font-bold text-white/10 select-none">
          SalesLess
        </div>
      </div>

      <div className="relative z-10">
        {/* Top Section */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-semibold">SalesLess</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/features"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/security"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/pricing"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Getting Started</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/signup"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forgot-password"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Forgot Password
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Social</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mx-auto max-w-7xl px-6 py-12 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs leading-relaxed">
                By submitting your email address, you agree to receive
                SalesLess's monthly newsletter. For more information, please
                read our privacy policy. You can always withdraw your consent.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="mx-auto max-w-7xl px-6 py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 SalesLess. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 bg-gray-600" />
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
