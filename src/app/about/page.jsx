"use client";
import { Suspense, useEffect, useState } from "react";
import React from 'react'
import Layout from '../Components/Layout/Layout'
import SectionOne from '../Components/About/SectionOne'
import SectionTwo from '../Components/About/SectionTwo'
import SectionThree from '../Components/About/SectionThree'
import { ScaleLoader } from "react-spinners";

export default function Page() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const scrollToPosition = isAtTop ? window.innerHeight : 0;
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Suspense
        fallback={
          <div className="mx-auto text-center w-full mt-[350px] h-[50vh]">
            <ScaleLoader color="#38afc9" height={90} radius={0} width={4} />
          </div>
        }
      >
    <Layout>
   <SectionOne/>
   <SectionTwo/>
   <SectionThree/>
    </Layout>
    </Suspense>
      <button
        onClick={handleClick}
        className="text-[#F0F0F0] bg-blue-700 p-2 fixed z-10 bottom-7 right-3 w-10 h-10 rounded-full flex items-center justify-center"
        aria-label={isAtTop ? "Scroll Down" : "Scroll to Top"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isAtTop
                ? "M4.5 9.75l7.5 7.5 7.5-7.5"
                : "M19.5 14.25l-7.5-7.5-7.5 7.5" 
            }
          />
        </svg>
      </button>
  </>
  )
}
