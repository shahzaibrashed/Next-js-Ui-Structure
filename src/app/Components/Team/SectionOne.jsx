/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import React from 'react'
const SectionOne = () => {
  const teams = [ 
    {
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArLi9Psjxrjdl2OZGcAmJva-ZE32nMM7Jdw&s",
      name:"Jhon Doe",
      position:"Manager",
    },  {
      imgUrl:"https://i.pravatar.cc/150?img=32",
      name:"Even Karder",
      position:"Mern Stack",
    },  {
      imgUrl:"https://i.pravatar.cc/150?img=32",
      name:"eoin morgan",
      position:"Tester",
    },  {
      imgUrl:"data:image/jpeg;base64,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",
      name:"stive Smith",
      position:"Full Stack ",
    },
   ]

  return (
<>
<div className="py-14 bg-white mt-10">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
    <div className="sm:w-6/12 order-last sm:order-first">
      <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
        {
          teams.map((e,i)=>{
            return(
              <li key={i} className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <Link href="#">
                    <img
                      className="mb-3 rounded-full mx-auto h-24 w-24"
                      src={e.imgUrl}
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                     {e.name}
                    </Link>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    {e.position}
                  </p>
                </div>
              </div>
            </li>
            )
          })
        }  
      </ul>
    </div>

    <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
      <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
        THE TEAM
      </p>
      <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
        Meet Our <span className="text-indigo-600">Team</span>
      </h3>
      <p className="mt-4 text-md leading-7 text-gray-500 font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
        <br />
        <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
</div>
</>
  )
}
export default SectionOne