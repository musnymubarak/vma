"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white bg-[#263039]">
      <div className="container mx-auto p-6 flex flex-col items-center justify-center text-center">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src="/images/lg.png"
            alt="Logo"
            width={85}
            height={85}
            className="h-[155px] w-auto" // slightly increased from 70px
          />
        </Link>
        <p className="text-xs md:text-base text-slate-500 break-words">
          Copyright © 2025 MusnyMubarak | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
