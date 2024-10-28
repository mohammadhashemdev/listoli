"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import ActiveLink from "../ActiveLink";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="hidden md:block nav-links text-sm text-white">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/pricing">Pricing</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
          <ActiveLink
            target="_blank"
            href="https://listoli.gitbook.io/content-service-api"
          >
            Docs
          </ActiveLink>
        </div>
        <div
          className="text-white md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </div>
      </nav>

      <MobileNavbar open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
