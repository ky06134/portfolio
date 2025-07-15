// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  {name: "Career", href: "/career"},
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "text-gray-600 hover:text-blue-500",
                  pathname === link.href && "font-semibold text-blue-600"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}