"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const [isActive, setIsActive] = useState(false);

  // Track current hash in URL
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const top = section.offsetTop - 120; // offset for navbar height
        const bottom = top + section.offsetHeight;
        const scrollY = window.scrollY;

        setIsActive(scrollY  >= top && scrollY < bottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <Link
      href={href}
      className={`block py-2 pr-4 pl-3 duration-300 ${
        isActive
          ? "text-[#edb41d] border-b-2 border-[#edb41d]"
          : "text-white border-b-2 border-transparent hover:border-[#edb41d] hover:text-[#edb41d]"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
