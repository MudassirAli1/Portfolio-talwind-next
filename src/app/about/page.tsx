import react from 'react'

const About = () => {
    return(
        <div id='About'><section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
            I’m a frontend web developer skilled in HTML, CSS, TypeScript, Next.js, and TalventCSS. I create dynamic, responsive interfaces that deliver great user experiences. With a keen eye for design, I bridge functionality with aesthetics. Passionate about coding, I bring ideas to life with precision and style.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
            <a href='/assets/cv/newcv.pdf'target='_blank'>
               View Cv
                </a>
              </button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
              className="object-cover object-center mx-auto rounded-[50%] w-[17rem] "
              alt="Picture"
              src="/assets/pictures/mypic.jpeg"
              height={700}
              width={700}
            />
          </div>
        </div>
      </section>
      </div>
    )
}
export default About