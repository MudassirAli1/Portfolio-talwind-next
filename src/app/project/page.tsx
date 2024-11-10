import react from 'react'

const Project = () => {
    return(
        <div id="Project"><section className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-12 mt-[10rem]">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        My Projects
      </h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                src="/assets/pictures/projectburger.jpeg"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-3xl text-black font-medium title-font mb-2">
                  Burger Web
                </h2>
                <p className="text-2xl leading-relaxed text-black">
                  Burger Order Website using Html Css
                </p>
                <a className="mt-3 text-green-900 inline-flex items-center" href='burger-customcss-wfk4.vercel.app'>
                 <button className='bg-green-900 rounded-[10%] text-white'>Click Here to Preview</button>
                 
                </a>
              </div>
            </div>
            
          </div>
         </div>
        </div>
      </section>
      </div>
    )
}
export default Project