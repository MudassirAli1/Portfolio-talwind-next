import react from 'react'
import Link from 'next/link';
import { HiDownload } from "react-icons/hi";
const Navbar = ()=>{
  return(
    <div className="z-40 sticky top-0"><header className="text-gray-600 body-font bg-green-100">
    <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center ">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/assets/pictures/logo.jpeg.jpeg" alt="Logo" height={100} width={100} className='rounded-[50%]'/>
        <span className="ml-3 text-xl p-3 rounded-[1rem]">Mudassir Ali</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  ">
        <Link href="/" className="mr-5 hover:text-gray-500 m-3 hover:bg-green-400 rounded-[1rem] p-3">Home</Link>
        <Link href="/about" className="mr-5 hover:text-gray-500 m-3 hover:bg-green-400 rounded-[1rem] p-3">About </Link>
        <Link href="/project" className="mr-5 hover:text-gray-500 m-3 hover:bg-green-400 rounded-[1rem] p-3">Projects</Link>
        <Link href="/skill" className="mr-5 hover:text-gray-500 m-3 hover:bg-green-400 rounded-[1rem] p-3">Skills</Link>
        <Link href="/contact" className="mr-5 hover:text-gray-500 m-3 hover:bg-green-400 rounded-[1rem] p-3">Contacts</Link>
      </nav>
      
      <a href="/assets/cv/newcv.pdf"target='_blank'>
      <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none
       hover:bg-green-700 rounded text-base mt-4 md:mt-0 text-white">
       Download Cv
       <HiDownload className='ml-1' />
      </button>
      </a>
    </div>
  </header>
  </div>
  )
}
export default Navbar