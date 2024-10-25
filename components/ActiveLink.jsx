"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AtiveLink({ href, children, onClick }) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${
        isActive ? "font-bold text-orange-600" : ""
      } text-base inline-block px-4 py-2 hover:bg-orange-600/20 duration-200 rounded-md`}
    >
      {children}
    </Link>
  );
}
