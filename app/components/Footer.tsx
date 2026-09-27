import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container m-auto flex justify-between items-center px-4 flex-col lg:flex-row gap-4">
        <Image
          src="/assets/logo.png"
          alt="Fitlog logo"
          width={100}
          height={30}
        />
        <p className="text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
