"use client";
import Link from 'next/link';
import react from 'react'
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return(
        <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
              className="object-cover object-center mx-auto rounded-[50%] w-[17rem] "
              alt="Picture"
              src="/assets/pictures/mypic.jpeg"
              height={500}
              width={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               I am
              <br className="hidden lg:inline-block " />
              <Typewriter
  options={{
    strings: ['Web Developer','Photo Editor'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <div className='w-[120px] h-[2px] bg-green-500'></div>
            <p className="mb-8 leading-relaxed">
            "I'm a front-end developer and photo editor with a keen eye for design and user experience. Specializing in crafting responsive, visually engaging web interfaces, I combine technical skills in HTML, CSS, and TypeScript with creative photo editing expertise to bring digital projects to life. Whether I'm building intuitive user interfaces or enhancing visuals, I focus on delivering polished, high-quality work that captivates and performs seamlessly."
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"} >
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Contact
              </button></Link>
             
            </div>
          </div>
        </div>
      </section>
    
    )
}
export default Hero