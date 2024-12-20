/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { lazy } from 'react';

const HomeBanner = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            onLoad={lazy}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/29848604/12817767_2560_1440_30fps.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        </div>
        <div
          className="relative z-20 items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        >
          <div className="pr-2 md:mt-20 mt-12 md:mb-14 py-14 md:py-0">
            <p className="py-4 text-lg text-white 2xl:py-8 md:py-6 2xl:pr-5">
              WE ARE IT SERVICES AGENCY~👋
            </p>
            <h1 className="text-3xl font-semibold text-blue-500 xl:text-5xl lg:text-3xl">
              <span className="block w-full">Think big, web make it possible</span>
            </h1>
            <p className="py-4 text-lg text-white 2xl:py-8 md:py-6 2xl:pr-5">
              IT Technology services built specifically for your business....
            </p>
            <div className="mt-4">
              <Link
                href="#explore"
                className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
              >
                Explore More
              </Link>
            </div>
          </div>
          <div className="pb-5 md:mt-20 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img
              loading="lazy"
              id="heroImg1"
              className=" lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              alt="Awesome hero page image"
              width="500"
              height="488"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeBanner;
