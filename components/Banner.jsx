import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Banner() {
  const desc =
    "Coffey is an easy-to-use coffee shop locator app that helps you find the perfect coffee spot wherever you are. With Coffey, you can discover new coffee shops, read reviews from other coffee lovers, and get directions to your chosen destination. Whether you're looking for a quick caffeine fix or a relaxing spot to spend your afternoon, Coffey is your go-to app for all things coffee.";
  return (
    <div className="w-full overflow-hidden flex flex-col items-center lg:flex-row lg:justify-between h-[32rem]">
      <div className="z-20 w-full lg:w-[43%] flex flex-col justify-center items-center gap-y-12 rounded-4xl bg-gradient-to-tr from-zinc-900/40 via-zinv-900/80 to-zinc-800/40 h-[32rem] overflow-hidden p-5 lg:p-9">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[4.5rem] lg:text-[5.6rem] text-center font-black text-white">
            COFFEY
          </h1>
          <p className="text-justify tracking-wide leading-6 rounded-xl lg:p-0">
            {desc}
          </p>
        </div>

        <Link
          href="#stores"
          className="w-full"
        >
          <button className="w-full py-3 text-center text-white bg-brown/70 lg:bg-brown backdrop-blur hover:bg-transparent border border-brown rounded-xl">
            Explore
          </button>
        </Link>
      </div>

      <div className="absolute lg:relative w-[92%] lg:w-[55%] h-[32rem] rounded-4xl border border-zinc-800 overflow-hidden">
        <Image
          draggable={false}
          className="w-full h-full object-cover object-bottom"
          width={1080}
          height={1080}
          quality={50}
          src="https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg"
          alt="main-banner"
          priority
        />
      </div>
    </div>
  );
}
