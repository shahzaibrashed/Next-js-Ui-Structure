/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<>






<footer className="px-3 pt-4 lg:px-9 border-t-2 bg-black">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <Link href="#" className="inline-flex items-center">
        <img
          src="https://mcqmate.com/public/images/logos/60x60.png"
          alt="logo"
          className="h-8 w-8"
        />
        <span className="ml-2 text-xl font-bold tracking-wide text-white">
         HNH TECH SOLUTIONS
        </span>
      </Link>
      <div className="mt-6 lg:max-w-xl">
        <p className="text-sm text-gray-500">
        Find the right storage at the right price, for those who don’t need 24/7 access to their storage unit, our on-demand storage opton is the way to go! With on-demand storage, we offer FREE pick-up from your residence or business. Just login find the storage near you to reserve your space and schedule a pick-up �me that works for you.
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 text-sm">
      <p className="text-base font-bold tracking-wide text-white">
        Workings 
      </p>
      <Link className='text-gray-500' href="#">UI/UX DESIGN</Link>
      <Link className='text-gray-500' href="#">Web Development</Link>
      <Link className='text-gray-500' href="#">App Development</Link>
      <p className="text-base font-bold tracking-wide text-white">
        Popular Topics
      </p>
      <Link className='text-gray-500' href="#">Human Resource Management</Link>
      <Link className='text-gray-500' href="#">Operations Management</Link>
      <Link className='text-gray-500' href="#">Marketing Management</Link>
    </div>
    <div>
      <p className="text-base font-bold tracking-wide text-white">
        COMPANY IS ALSO AVAILABLE ON
      </p>
      <div className="flex items-center gap-1 px-2">
        <Link href="/" className="w-full min-w-xl">
          <img
            src="https://mcqmate.com/public/images/icons/playstore.svg"
            alt="Playstore Button"
            className="h-10"
          />
        </Link>
        <Link
          className="w-full min-w-xl"
          href="/"
        >
          <img
            src="https://mcqmate.com/public/images/icons/youtube.svg"
            alt="Youtube Button"
            className="h-28"
          />
        </Link>
        
      </div>
      <p className="text-base font-bold tracking-wide text-white">
        Contacts
      </p>
      <div className="flex">
        <p className="mr-1 text-gray-500">Email:</p>
        <Link className='text-gray-500' href="/contact" title="send email">
          Hnhtechsolutions@gmail.com
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
    HNH Tech Solutions© 2024.All Rights Reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <Link
          href="#"
          className="text-sm mr-3 text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Privacy &amp; Cookies Policy
        </Link>
      </li>
      <li>
       
      </li>
    </ul>
  </div>
</footer>
</>
  )
}

export default Footer