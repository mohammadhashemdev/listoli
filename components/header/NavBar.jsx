import ActiveLink from "../ActiveLink";
import Image from "next/image";

export default function NavBar() {
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
        <div className="nav-links flex md:flex-row justify-end flex-col gap-3 items-center text-sm text-white">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/pricing">Pricing</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </div>
      </nav>
    </>
  );
}
