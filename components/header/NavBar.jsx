"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ActiveLink from "../ActiveLink";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <nav className="container flex flex-row justify-between items-center mx-auto px-4 md:px-8 py-3 sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex flex-row justify-center items-center h-8 w-16 md:h-12 md:w-36">
          <Image
            src="/logo.png"
            width={90}
            height={90}
            alt="logo"
            className="object-cover"
          />
        </div>
        <button
          onClick={handleOpenClose}
          className="flex md:hidden justify-center items-center"
        >
          <FontAwesomeIcon size="lg" className="text-white" icon={faBars} />
        </button>
        <div className="nav-links hidden md:flex md:flex-row justify-end flex-col gap-3 items-center text-sm text-white">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/pricing">Pricing</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </div>

        {isOpen && (
          <div
            onClick={handleOpenClose}
            className="fixed md:hidden h-screen w-full bg-black/80 z-30 top-0 left-0"
          ></div>
        )}

        <div
          className={`w-72 md:hidden border-l border-b flex flex-col items-center justify-between p-6 border-slate-800 z-50 bg-slate-950 rounded-bl-xl h-96 fixed top-0 right-0 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={handleOpenClose}
            className="flex flex-row justify-start items-center text-white w-full"
          >
            <FontAwesomeIcon size="xl" icon={faXmark} />
          </button>
          <div className="flex justify-center items-center gap-5 text-white">
            <ul className="space-y-6">
              <li>
                <ActiveLink href="/" onClick={handleOpenClose}>
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/about" onClick={handleOpenClose}>
                  About
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/contact" onClick={handleOpenClose}>
                  Contact
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="w-full rounded-full h-1 bg-slate-600"></div>
        </div>
      </nav>
    </>
  );
}
