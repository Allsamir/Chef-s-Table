import React from 'react'


export const Banner: React.FC = () => {
  return (
    <div className="bg-hero-pattern rounded-3xl mt-12 mb-24 bg-no-repeat bg-cover">
          <div className="bg-layer rounded-3xl">
                    <div className="text-center py-32">
                              <h1 className="text-6xl font-bold text-white leading-[4.5rem]">
                                        Discover an exceptional cooking <br />class tailored for you!
                              </h1>

                              <p className="pt-8 pb-12 text-white font-normal text-lg">
                                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.
                              </p>

                              <div className="flex gap-x-4 justify-center">
                                        <button className="btn rounded-[3.125rem] btn-lg bg-light-green text-black hover:text-light-green hover:bg-black">Explore Now</button>
                                        <button className="rounded-[3.125rem] btn-lg btn-outline outline-1 outline outline-white text-white hover:text-black hover:bg-white">Our Feedback</button>
                              </div>
                    </div>
          </div>
    </div>
  )
}
