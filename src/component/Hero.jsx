import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi'; 
import logo from '../../public/logo.png'

export const Hero = () => {
  return (
    <div className="relative ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
        autoPlay
        loop
        muted
      ></video>

      <div className="relative z-20 h-full w-full bg-transparent flex flex-col">
        
        <nav className="container mx-auto p-4 flex justify-between items-center text-white">
          <img src={logo} alt="" />
          <div className="hidden md:flex bg-[#0C2B2FB2] text-[#B0FAFFB2] space-x-4 px-10 py-4 rounded-full">
            <span  className="px-4 py-2">
              Features
            </span>
            <span  className="px-4 py-2">
              Why us
            </span>
            <span  className="px-4 py-2">
              Tokenmonics
            </span>
            <span  className="px-4 py-2">
              Roadmap
            </span>
          </div>

          <div className="hidden md:flex gap-5 md:block">
            <button className=" text-white px-4 py-2 rounded-lg">
              Login 
            </button>
            <button className="bg-[#CDFCFF] hover:bg-[#CDFCFF] text-black px-4 py-2 rounded-lg">
              Whitepaper
            </button>
          </div>

          <div className="md:hidden">
            <button className="focus:outline-none">
              <FiMenu size={30} />
            </button>
          </div>
        </nav>

        <div className="container mx-auto flex-grow text-center mt-20 items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center leading-normal">When Innovation <br/>Meets <span className='bg-[#B0F9FF] px-4 text-black rounded-full'>Investment</span></h1>
          <p className='text-center mt-5 text-[#B0FAFFB2]'>Empowering Trading Through Advanced Technology </p>
          <button className='border p-2 rounded-md mt-5 text-white'>Open Dapp</button>
        </div>
      </div>

      <div style={{ height: "200px", background: "linear-gradient(180deg, rgba(0, 22, 29, 0) 0%, #00161D 100%)" }}>
      </div>
    </div>
  )
}
