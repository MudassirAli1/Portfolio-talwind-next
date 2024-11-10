import react from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return(
        <div id="Contact"><section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Feel free to Contact
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full pt-8 border-t-2 border-green-500 text-center">
        
          <button className='flex mx-auto text-white bg-green-500 hover:bg-green-700 py-2 px-8 rounded focus:outline-none text-lg'>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mudassiralis817@gmail.com"
          className="text-white"
          target='_blank'>mudassiralis817@gmail.com
          </a></button>
          
          <p className="leading-normal my-5">
            Address : Herchand rai Colony
            <br />
            Sindh,Mirpurkhas
            <br />
            Phone : +923142909772
          </p>
        
          <span className="inline-flex">
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
      </div>
    </div>
  </div>
</section></div>
    )
}
export default Contact