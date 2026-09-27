"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
function Header() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];
  const userLinks = [
    { name: "Plan", href: "/my-plan" },
    { name: "Saved", href: "/my-plan" },
  ];

  const navMenu = (
    <nav className="flex flex-col lg:flex-row gap-4 lg:gap-6 font-semibold items-center justify-center border-b lg:border-b-0 lg:pb-0 lg:mb-0 pb-6 mb-2 border-[#1C1F26]">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={index}
            className={`${isActive ? "bg-primary/20 text-primary" : ""} px-4 py-2 rounded-full`}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );

  const userMenu = (
    <nav className="flex flex-col lg:flex-row gap-4 lg:gap-6 font-semibold items-center justify-end">
      {userLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.name}
          <span className="bg-primary text-black font-bold rounded-full leading-6 text-center w-6 inline-block h-6 ml-1">
            0
          </span>
        </Link>
      ))}
    </nav>
  );
  return (
    <header className="border-b border-[#1C1F26]">
      <div className="container mx-auto py-3 flex justify-between items-center px-2">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Fitlog logo"
            width={100}
            height={30}
          />
        </Link>

        <div className="lg:block hidden">{navMenu}</div>

        <div className="lg:block hidden">{userMenu}</div>

        <div
          className={`lg:hidden flex flex-col w-[100vw] gap-4 left-0 top-0 transition-all duration-500 ease-in-out h-[100vh] fixed justify-center items-center bg-[#0c0d10] z-100 ${isOffCanvasOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
        >
          {navMenu}
          {userMenu}
          <button
            onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)}
            className="border-none outline-0 text-2xl cursor-pointer absolute top-5 right-5"
          >
            {" "}
            <RiCloseLargeFill />
          </button>
        </div>

        <button
          onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)}
          className="inline-block lg:hidden border-none outline-0 text-2xl cursor-pointer"
        >
          <CiMenuFries />
        </button>
      </div>
    </header>
  );
}
export default Header;
