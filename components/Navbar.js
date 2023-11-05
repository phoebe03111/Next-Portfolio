"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto z-10 bg-primary">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} className="rounded-full"/>
        </Link>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="navbar-icon">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="navbar-icon"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
};

export default Navbar;
