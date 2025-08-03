import React from 'react';

const Navbar = () => {
  return (
    <div
      className="fixed top-5 left-0 right-0 z-50 w-8/12 mx-auto rounded-full bg-transparent bg-opacity-80 shadow-lg backdrop-blur-md"
      style={{
        boxShadow: '0px 0px  500px 0px #67e8f9' // Cyan-200
      }}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a className='text-cyan-200'>Parent</a>
                <ul className="p-2">
                  <li className='text-cyan-200'>Submenu 1</li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a className='text-cyan-200'>Item 3</a></li>
            </ul>
          </div>
          <img src="./logo1.png" alt="" className='w-15 rounded-full'/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-cyan-200'>Item 1</a></li>
            <li>
              <details>
                <summary className='text-cyan-200'>Parent</summary>
                <ul className="p-2">
                  <li className='text-cyan-200'><a>Submenu 1</a></li>
                  <li className='text-cyan-200'>Submenu 2</li>
                </ul>
              </details>
            </li>
            <li><a className='text-cyan-200'>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <a
                    href="/your-resume.pdf"
                    download
                    className="group relative inline-flex items-center gap-2 px-4 py-2 border-2 border-transparent bg-slate-800 text-cyan-300 font-mono font-bold rounded-full overflow-hidden scale-105 hover:text-white transition-all duration-300"
                >
                    {/* Spinning border background */}
                    <span className="absolute inset-[1px] z-0 rounded-md border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow"></span>

                    {/* Inner mask to hide the gradient background */}
                    <span className="absolute inset-[1px] z-0 rounded-md bg-slate-800"></span>

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-cyan-300 group-hover:text-white transition"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l3-3m-3 3l-3-3m0-9h6a2 2 0 012 2v4H9V6a2 2 0 012-2z"
                            />
                        </svg>
                        Resume
                    </span>
                </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
