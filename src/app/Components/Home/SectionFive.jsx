/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const SectionFive = () => {
  return (
    <>
    
    <div className="relative py-16">
  <div
    aria-hidden="true"
    className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
  >
    <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 dark:from-blue-700" />
    <div className="blur-[106px] h-32 bg-gradient-to-r from-blue-500 to-blue-500 dark:to-indigo-600" />
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="relative">
      <div className="flex items-center justify-center -space-x-2">
        <img
          loading="lazy"
          width={400}
          height={400}
          src="https://randomuser.me/api/portraits/women/12.jpg"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width={200}
          height={200}
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="member photo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width={200}
          height={200}
          src="https://randomuser.me/api/portraits/women/60.jpg"
          alt="member photo"
          className="z-10 h-16 w-16 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width={200}
          height={200}
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="member photo"
          className="relative h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width={200}
          height={200}
          src="https://randomuser.me/api/portraits/women/34.jpg"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
          Get Started now
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-300">
          Be part of millions people around the world using tailus in modern
          User Interfaces.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark">
              Get Started
            </span>
          </Link>
          <Link
            href="/about"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-blue-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
          ><span className="relative text-base font-semibold text-blue-500 dark:text-white">
              More about
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default SectionFive