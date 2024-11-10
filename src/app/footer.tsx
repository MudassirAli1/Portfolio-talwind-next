import react from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
      return(  
             <div>
          <footer className="text-gray-600 body-font bg-green-200">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="/assets/pictures/logo.jpeg.jpeg" alt="Logo" height={100} width={100} className='rounded-[50%]'/>
      <span className="ml-3 text-xl ">Mudassir Ali</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Mudassir Ali 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <div className='h-20 w-20'><a href='https://www.facebook.com/mudassiralialis?mibextid=ZbWKwL'
      target='_blank'
      ><img src='/assets/pictures/facebook.png'></img>
      </a></div>
      <div className='h-20 w-20'><a href='https://www.instagram.com/mudassir_shaikh999/profilecard/?igsh=NGNtdHgxYnQ4cmNt'
      target='_blank'
     ><img src='/assets/pictures/instagram.png'></img>
      </a></div>
      
      <div className='h-20 w-20'><a href='https://www.linkedin.com/in/mudassir-ali-6399702b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      target='_blank'>
        <img src='/assets/pictures/linkedin.png'></img>
  </a></div>
    </span>
  </div>
</footer>

       </div>
    )
}
export default Footer