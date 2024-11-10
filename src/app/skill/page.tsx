import reac from 'react'

const Skill = () => {
    return(
        <div id="Skills"><section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I learned HTML, CSS, TypeScript, Next.js, and Tailwind through the Governor's Initiative AI course, and now I plan to advance my skills further in AI.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-500 border p-4 rounded-lg">
                <img
                  alt="HTML logo"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/assets/pictures/htmllogo.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    HTML
                  </h2>
                  <div className='relative flex-grow'><div className='h-2 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute h-2 bg-green-500 w-[95%] rounded-xl'></div>
                    </div>
                    <p className="text-green-500 font-bold text-right">95%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-500 border p-4 rounded-lg">
                <img
                  alt="CSS logo"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/assets/pictures/csslogo.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    CSS
                  </h2>
                  <div className='relative flex-grow'><div className='h-2 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute h-2 bg-green-500 w-[93%] rounded-xl'></div>
                    </div>
                    <p className="text-green-500 font-bold text-right">93%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-500 border p-4 rounded-lg">
                <img
                  alt="Typescript logo"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/assets/pictures/typescriptlogo.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Typescript
                  </h2>
                  <div className='relative flex-grow'><div className='h-2 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute h-2 bg-green-500 w-[90%] rounded-xl'></div>
                    </div>
                    <p className="text-green-500 font-bold text-right">90%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-500 border p-4 rounded-lg">
                <img
                  alt="Nextjs Logo"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/assets/pictures/nextjslogo.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Next Js</h2>
                  <div className='relative flex-grow'><div className='h-2 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute h-2 bg-green-500 w-[75%] rounded-xl'></div>
                    </div>
                    <p className="text-green-500 font-bold text-right">75%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-green-500 border p-4 rounded-lg">
                <img
                  alt="Talwind Logo"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/assets/pictures/talwindlogo.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Talwind Css
                  </h2>
                  <div className='relative flex-grow'><div className='h-2 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute h-2 bg-green-500 w-[65%] rounded-xl'></div>
                    </div>
                    <p className="text-green-500 font-bold text-right">65%</p>
                  </div>  
                </div>
              </div>
            </div>
           
            
            
            
          </div>
        </div>
      </section>
      </div>
    )
}
export default Skill