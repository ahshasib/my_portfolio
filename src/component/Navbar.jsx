import React from 'react';

const Navbar = () => {
  return (
    <div
      className="fixed top-5 left-0 right-0 z-50 w-11/12 lg:w-5/12 mx-auto rounded-full bg-transparent bg-opacity-80 shadow-lg backdrop-blur-md"
      style={{
        boxShadow: '0px 0px 500px 0px #67e8f9', // Cyan-200
      }}
    >
      <div className="navbar flex justify-between items-center">

        {/* Logo */}
        <div className="navbar-start">
          <img src="./logo1.png" alt="" className="w-10 md:w-12 rounded-full" />
        </div>

        {/* Center Resume Button (small on mobile, large on lg) */}
        <div className="lg:hidden navbar-center">
          <a
            href="/your-resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm border-2 border-transparent bg-slate-800 text-cyan-300 font-mono font-bold rounded-full overflow-hidden scale-105 hover:text-white transition-all duration-300"
          >
            <span className="absolute inset-[1px] z-0 rounded-md border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow"></span>
            <span className="absolute inset-[1px] z-0 rounded-md bg-slate-800"></span>
            <span className="relative z-10 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-cyan-300 group-hover:text-white transition"
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

        {/* Mobile dropdown on right */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cyan-900 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li><a className="text-cyan-200">Home</a></li>
              <li><a className="text-cyan-200">About</a></li>
              <li><a className="text-cyan-200">Skills</a></li>
              <li><a className="text-cyan-200">Project</a></li>
              <li><a className="text-cyan-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Full menu & full-size resume button for lg device */}
        <div className="hidden lg:flex navbar-center gap-5">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><a className="text-cyan-200">Home</a></li>
            <li><a className="text-cyan-200">About</a></li>
            <li><a className="text-cyan-200">Skills</a></li>
            <li><a className="text-cyan-200">Project</a></li>
            <li><a className="text-cyan-200">Contact</a></li>
          </ul>
          <a
            href="/your-resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-4 py-2 border-2 border-transparent bg-slate-800 text-cyan-300 font-mono font-bold rounded-full overflow-hidden scale-105 hover:text-white transition-all duration-300"
          >
            <span className="absolute inset-[1px] z-0 rounded-md border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow"></span>
            <span className="absolute inset-[1px] z-0 rounded-md bg-slate-800"></span>
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
