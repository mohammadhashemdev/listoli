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
      className={`${isActive ? "font-bold text-orange-500" : ""} text-base`}
    >
      {children}
    </Link>
  );
}
