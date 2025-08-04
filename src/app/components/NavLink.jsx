"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionMiddle = rect.top + (rect.height / 2);
        
        // Check if section's middle point is in the viewport
        const isSectionActive = sectionMiddle > 0 && sectionMiddle < viewportHeight;
        
        if (href === "#contact") {
          // For last section, activate once top is reached
          setIsActive(rect.top <= viewportHeight * 0.5);
        } else {
          setIsActive(isSectionActive);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

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