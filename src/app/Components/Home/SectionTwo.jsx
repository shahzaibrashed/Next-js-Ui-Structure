import Link from 'next/link'
import React from 'react'

const SectionTwo = () => {

  return ( 
   <>
  <div id='explore' className="flex items-center  justify-center  bg-gray-200">
    <div className="container m-3 md:m-10">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          IT <span className="text-indigo-600">TECH </span>  SOLUTIONS
          </h2>
          <h3 className="text-xl md:text-3xl mt-10">FOLLOW ON</h3>
          <p className="text-md md:text-xl mt-10">
          Stay connected with HNH Solutions on social media! Follow us for the latest updates, expert insights, and exciting announcements. Join our community and be a part of the conversation. Find us on
          </p>
        </div>
        <div className="flex flex-wrap mt-10 justify-center">
          <div className="m-3">
            <Link
              href="#"
              title="Quicktoolz On Facebook"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span className="mx-auto">Facebook</span>
            </Link>
          </div>
          <div className="m-3">
            <Link
              href="#"
              title="Quicktoolz On Twitter"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-black hover:border-black hover:bg-black hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span className="mx-auto">Twitter</span>
            </Link>
          </div>
          <div className="m-3">
            <Link
              href="#"
              title="Quicktoolz On Pinterest"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-pink-600 hover:border-pink-600 hover:bg-pink-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span className="mx-auto">Instagram</span>
            </Link>
          </div>
          <div className="m-3">
            <Link
              href="#"
              title="Quicktoolz On Facebook"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <span className="mx-auto">Linked In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default SectionTwo