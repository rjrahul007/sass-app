import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-black bg-white mt-16">
      <div className="max-w-[1400px] mx-auto px-14 py-10 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Converso | RJ</h3>
            <p className="text-sm text-gray-600">
              Empowering your learning journey with AI-powered companions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Product</h4>
            <nav className="space-y-2">
              <Link
                href="/companions"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Companions
              </Link>
              <Link
                href="/subscription"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Pricing
              </Link>
              <Link
                href="/my-journey"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                My Journey
              </Link>
            </nav>
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Support</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Legal</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-300 block"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-8">
          <p className="text-center text-sm text-gray-600">
            © 2026 Converso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
