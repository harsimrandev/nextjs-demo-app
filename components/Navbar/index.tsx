import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from '@/components/MobileNav';
import Logo from '@/components/Logo';
import Navlinks from '@/components/Navlinks';

const links = [
  { name: "The Edit", href: "#" },
  { name: "New Arrivals", href: "#" },
  { name: "Designers", href: "#" },
  { name: "Clothing", href: "#" },
  { name: "Shoes", href: "#" },
  { name: "Bags", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Jewelry", href: "#" },
  { name: "Beauty", href: "#" },
  { name: "Home", href: "/" },
];

const actionButtons = [
  {
    name: "Search",
    link: "#",
  },
  {
    name: "Bag",
    link: "#",
  },
  {
    name: "Account",
    link: "#",
  },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
        <Navlinks />
        </div>
        <div className="flex gap-x-4 justify-end ml-5">
          {actionButtons.map((l, idx) => (
            <Link
              key={idx}
              href={l.link}
              className={`${l.name === "Account" && "hidden lg:block"}  `}
            >
              <Image
                src={`/images/${l.name}.svg`}
                alt={l.name}
                width={24}
                height={24}
                onClick={() => setMobileMenuOpen(true)}
              />
            </Link>
          ))}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Image
              className="lg:hidden"
              src={`/images/Nav.svg`}
              alt="nav"
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>
      <MobileNav 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        links={links}
      />
    </header>
  );
}

export default NavBar;
