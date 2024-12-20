/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const SectionThree = () => {
const blogCard = [
  {
   imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg5-C2sYbYKW.png',
  tittle:"Woman holding a mug",
  desc:"A blog is a website where people or businesses regularly publish written content on a specific topic.",
  },
  {
    imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg5-C2sYbYKW.png',
    tittle:"Woman holding a mug",
    desc:" A blog is a website where people or businesses regularly publish written content on a specific topic.",
  },
  {
    imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg3-om897IuU.png',
    tittle:"Woman holding a mug",
    desc:"  A blog is a website where people or businesses regularly publish written content on a specific topic.",
  },{
    imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg1-DXpUOxKm.png',
    tittle:"Woman holding a mug",
    desc:"  A blog is a website where people or businesses regularly publish written content on a specific topic.",
  },{
    imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg4-BgF2n5X9.png',
    tittle:"Woman holding a mug",
    desc:"  A blog is a website where people or businesses regularly publish written content on a specific topic.",
  },{
    imgUrl:'https://hnh-figma-work.vercel.app/assets/webImg1-DXpUOxKm.png',
    tittle:"Woman holding a mug",
    desc:"  A blog is a website where people or businesses regularly publish written content on a specific topic.",
  }
]
  
  return (
   <>
   <div className='text-center mt-10'><h1 className='text-blue-500 md:text-4xl text-2xl font-bold'>Over All Projects </h1></div>
   <div className="max-w-screen-xl mt-10 mx-auto p-5 sm:p-10 md:p-16 relative">
  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
    <div className="sm:col-span-5">
      <Link href="#">
        <div
          className="bg-cover text-center overflow-hidden"
          style={{
            minHeight: 300,
            backgroundImage:
              'url("https://hnh-figma-work.vercel.app/assets/webImg6-Cj9ERi0-.png")'
          }}
          title="Woman holding a mug"
        ></div>
      </Link>
      <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="">
          <Link
            href="#"
            className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Websites
          </Link>
          <Link
            href="#"
            className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
          Make Website for Using  
          </Link>
          <p className="text-gray-700 text-base mt-2">
          A blog is a website where people or businesses regularly publish written content on a specific topic.
          </p>
        </div>
      </div>
    </div>

    <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">

      {
        blogCard.map((e,i)=>{
          return(
            <div key={i} className="">
            <Link href="#">
              <div
                className="h-40 bg-cover text-center overflow-hidden"
                style={{
                  backgroundImage:
                   `url(${e.imgUrl})`
                }}
                title={e.tittle}
              ></div>
            </Link>
            <Link
              href="#"
              className="text-gray-900 text-center inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
            >
             {e.desc}
            </Link>
          </div>
          )
        })
      }

    </div>
  </div>
</div>  
   </>
  )
}
export default SectionThree