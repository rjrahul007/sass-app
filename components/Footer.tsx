import React from 'react';
import { Linkedin, Instagram, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden mt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Converso | RJ
                </h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Empowering your learning journey with our{' '}
                <span className="text-blue-400 font-medium">Real-time AI Teaching Platform</span>.
                Transform the way you learn, one conversation at a time.
              </p>
            </div>

            {/* Stats or features */}
            {/* <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">AI Support</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-400">∞</div>
                  <div className="text-sm text-gray-400">Learning Paths</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-6 flex items-center">
                <span className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent mr-3"></span>
                Quick Links
              </h3>
              <nav className="space-y-3">
                {[
                  { href: "/subscription", label: "Subscription", icon: "💳" },
                  { href: "/my-journey", label: "My Journey", icon: "🚀" },
                  { href: "/companions", label: "Companions", icon: "🤝" },
                  { href: "/sign-in", label: "Sign In", icon: "🔐" }
                ].map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span className="group-hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-6 flex items-center">
                <span className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent mr-3"></span>
                Connect
              </h3>
              <div className="flex space-x-4">
                {[
                  { href: "https://github.com/rjrahul007", icon: Github, color: "hover:bg-gray-700" },
                  { href: "https://linkedin.com/in/rjrahool007", icon: Linkedin, color: "hover:bg-blue-600" },
                  { href: "https://www.instagram.com/rjrahool007/", icon: Instagram, color: "hover:bg-pink-600" }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white/40 hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter or CTA */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">Get the latest AI learning insights delivered to your inbox.</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Converso. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Crafted with{' '}
                <span className="text-red-400 animate-pulse">❤️</span>
                {' '}and innovation by{' '}
                <a 
                  href="https://github.com/rjrahul007" 
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline"
                >
                  RJ
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;
