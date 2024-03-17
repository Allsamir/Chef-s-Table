import React from 'react'
import '../App.css'

const Navbar: React.FC = () => {
return (
<div className="navbar lg:justify-between text-black">
          <div className='flex-1 lg:flex-none'>
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>

          <div className="links lg:block hidden">
                    <div className="flex gap-x-12">
                              <a href="#">Home</a>
                              <a href="#">Recipes</a>
                              <a href="#">About</a>
                              <a href="#">Search</a>
                    </div>
          </div>

          <div className="gap-2">
                    <div className="form-control">
                              <label className="input input-bordered flex items-center gap-2 bg-white">
                                        <input type="text" className="md:w-44 w-20 bg-white" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                              </label>
                    </div>
                    <div className="dropdown dropdown-end">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                                  <img alt="Tailwind CSS Navbar component"
                                                            src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/347637180_1690058611414478_8310985686478147867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e7SwBs8BkvMAX9LMm_G&_nc_ht=scontent.fdac27-1.fna&oh=00_AfBgtVDS8-mFEQgtWnJxNCBcrZ0jRfgOQUAfU0_XRUAjJg&oe=65FACA4C" />
                                        </div>
                              </div>
                              <ul tabIndex={0}
                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52">
                                        <li>
                                                  <a className="justify-between">
                                                            Profile
                                                            <span className="badge">New</span>
                                                  </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                              </ul>
                    </div>
          </div>
</div>
)
}

export default Navbar