import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full z-50 bg-slate-900 text-white flex flex-col-reverse justify-center border-t border-slate-700 items-center text-center py-10 md:py-16 font-gupter text-sm md:text-xl">
      <p>info@listoli.io</p>
      <div className="flex flex-row justify-center items-center h-8 w-16 md:h-12 md:w-36">
        <Image
          src="/logo.png"
          width={90}
          height={90}
          alt="logo"
          className="object-cover"
        />
      </div>
      <p>_</p>
      <p>
        <span className="font-bold">Listoli</span> | Copyright{" "}
        {new Date().getFullYear()} | all rights reserved.
      </p>
    </footer>
  );
}
