/* eslint-disable @next/next/no-img-element */
import React from 'react'

const SectionOne = () => {
 const cards = [{
  title:"Prompt Builder",
  icon:(<svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-terminal"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1={12} y1={19} x2={20} y2={19} />
        </svg>),
  desc:"    An AI-powered prompt builder to help you create stunning images.",
 },{
  title:"Control grid size",
  icon:(<svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-grid"
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <line x1={3} y1={9} x2={21} y2={9} />
    <line x1={3} y1={15} x2={21} y2={15} />
    <line x1={9} y1={3} x2={9} y2={21} />
    <line x1={15} y1={3} x2={15} y2={21} />
  </svg>),
  desc:" Choose from 16x16, 32x32, 64x64, or 128x128 grids.",
 },{
  title:"Advanced Tuning",
  icon:( <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sliders-horizontal"
  >
    <line x1={21} y1={4} x2={14} y2={4} />
    <line x1={10} y1={4} x2={3} y2={4} />
    <line x1={21} y1={12} x2={12} y2={12} />
    <line x1={8} y1={12} x2={3} y2={12} />
    <line x1={21} y1={20} x2={16} y2={20} />
    <line x1={12} y1={20} x2={3} y2={20} />
    <line x1={14} y1={2} x2={14} y2={6} />
    <line x1={8} y1={10} x2={8} y2={14} />
    <line x1={16} y1={18} x2={16} y2={22} />
  </svg>),
  desc:"   Advanced options for adjusting sampling steps and prompt guidance.",
 }
]

  return (
    <>
    	<div class="area">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
    <section id="features" className="container  space-y-6  py-8 mx-auto md:py-12 lg:py-24">
      
  <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
      Software Companies Features
    </h2>
    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
      Discover the amazing features offered by web Development companies to enhance
      your online presence.
    </p>
  </div>

  <div className="mx-auto grid justify-center md:gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
   {
    cards.map((e,i)=>{
      return(
        <div key={i} className="relative m-2 overflow-hidden rounded-lg border bg-background p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
         {e.icon}
          <div className="space-y-2">
            <h3 className="font-bold">{e.title}</h3>
            <p className="text-sm text-muted-foreground">
             {e.desc}
            </p>
          </div>
        </div>
      </div>
      )
    })
   }
  </div>

</section>
 
    </>
  )
}
export default SectionOne