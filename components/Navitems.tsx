"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

const navItems = [
  { name: "Home", href: "/" },
  { name: "Subscription", href: "/subscription" },
  { name: "My Journey", href: "/my-journey" },
  { name: "Companions", href: "/companions" },
];

const Navitems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            "transition-all duration-300 hover:text-primary",
            pathname === href && "text-primary font-semibold",
          )}
        >
          {name}
        </Link>
      ))}
      {/* Uncomment the following lines if you want to add more links */}
      {/* <Link href="/about" className="text-lg font-semibold hover:text-blue-500">
                About
            </Link>
            <Link href="/contact" className="text-lg font-semibold hover:text-blue-500">
                Contact
            </Link> */}
      {/* <Link href="/" className="text-lg font-semibold hover:text-blue-500">
                Home
            </Link>
            <Link href="/subscription" className="text-lg font-semibold hover:text-blue-500">
                Subscription
            </Link>
            <Link href="/my-journey" className="text-lg font-semibold hover:text-blue-500">
                My Journey
            </Link>
            <Link href="/companions" className="text-lg font-semibold hover:text-blue-500">
                Companions
            </Link> */}
    </nav>
  );
};

export default Navitems;
