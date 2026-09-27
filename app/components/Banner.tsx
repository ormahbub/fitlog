import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="py-10 px-4 lg:px-2">
      <div className="container bg-[#222630] mx-auto rounded-2xl p-12 flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start mt-6 lg:mt-0">
          <span className="text-primary uppercase font-sem text-sm lg:text-md text-center lg:text-left">
            Workout Library
          </span>
          <h1 className="uppercase lg:max-w-[620px] max-w-[100%] text-white text-4xl lg:text-6xl font-oswald font-bold mt-4 text-center lg:text-left">
            Train with intent. Log every set.
          </h1>
          <p className="text-sm text-[#9CA3AF] mt-4 max-w-[100%] lg:max-w-[430px] text-center lg:text-left">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <a
            className="text-sm px-6 py-2 rounded-md inline-block mt-6 lg:mt-10 font-semibold uppercase bg-primary text-black"
            href="#the-library"
          >
            Browse workouts
          </a>
        </div>
        <div>
          <Image
            className="max-w-[100%] h-auto"
            src="/assets/banner.png"
            alt="Fitlog Banner"
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
