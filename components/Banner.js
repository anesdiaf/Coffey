import Link from 'next/link';
import React from 'react'
import Styles from "../styles/Banner.module.css";


export default function Banner() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-8 text-lg">
      <div className="w-full lg:w-[40%] xl:w-[35%] h-[24rem] flex flex-col justify-center items-center gap-12">
        <p className="font-poppins text-[4.5rem] lg:text-[5rem] font-black text-brown-500">COFFEY</p>
        <p className="bg">Our app allows you to discover the best coffee shops in your current location so you can keep a high-quality experience with your coffee.</p>
        <Link className="w-full py-3 text-center text-white bg-brown-500 hover:bg-transparent border border-brown-500 rounded-xl" href="/coffee-store">
          Explore
        </Link>
      </div>
      <video className="w-full lg:w-[60%] xl:w-[65%] rounded-3xl" width="1616" height="1072" autoPlay muted loop>
        <source src='/static/coffee.mp4'/>
      </video>
    </div>
  )
}
