import React, { memo } from "react";
import Link from "next/link";

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

function Navlinks() {
  return (
    <>
      {links.map((l) => (
        <Link
          key={l.name}
          href={l.href}
          className="text-sm block font-normal leading-6 text-black uppercase"
        >
          {l.name}
        </Link>
      ))}
    </>
  );
}

export default memo(Navlinks);
