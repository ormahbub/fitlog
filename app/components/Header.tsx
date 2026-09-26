"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];
  const userLinks = [
    { name: "Plan", href: "/my-plan" },
    { name: "Saved", href: "/my-plan" },
  ];

  return (
    <header>
      <div className="container mx-auto py-3 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Fitlog logo" className="w-[100px]" />
        </Link>

        <nav className="flex gap-6 font-semibold items-center justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`${isActive ? "bg-[var(--primary-color)]/20 text-[var(--primary-color)]" : ""} px-4 py-2 rounded-full`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex gap-6 font-semibold items-center justify-end">
          {userLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}{" "}
              <span className="bg-[var(--primary-color)] text-black font-bold rounded-full leading-[24px] text-center w-[24px] inline-block h-[24px]">
                0
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
