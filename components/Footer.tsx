import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Github, X } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">Converso | RJ</h2>
          <p className="mt-4 text-sm text-gray-400">
            Empowering your learning with Real-time AI Teaching Platform.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
             <li>
    <Link href="/subscription" className="text-white hover:text-gray-400 transition-colors">
      Subscription
    </Link>
  </li>
             <li>
    <Link href="/my-journey" className="text-white hover:text-gray-400 transition-colors">
        My Journey
    </Link>
  </li>
             <li>
    <Link href="/companions" className="text-white hover:text-gray-400 transition-colors">
        Companions
    </Link>
  </li>
             <li>
    <Link href="/sign-in" className="text-white hover:text-gray-400 transition-colors">
        Sign In
    </Link>
  </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-white"><Github size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Converso. All rights reserved.
        <br />
        <span className='text-xs'> Made with ❤️ by <a href="" className="text-white hover:text-gray-400 transition-colors">RJ</a></span>
      </div>
    </footer>
  )
}

export default Footer
