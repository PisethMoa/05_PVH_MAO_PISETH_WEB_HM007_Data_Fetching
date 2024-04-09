import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div>
      <div>
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <img
                    className="h-8 cursor-pointer"
                    src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="flex md:ml-4">
                <div className="hidden md:block">
                  <div className="flex space-x-4 gap-5">
                    <a
                      href="#"
                      className="text-white hover:bg-white px-3 py-2 rounded-md text-sm font-medium hover:text-black"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white px-3 py-2 rounded-md text-sm font-medium hover:text-black"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white px-3 py-2 rounded-md text-sm font-medium hover:text-black"
                    >
                      Romance
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white px-3 py-2 rounded-md text-sm font-medium hover:text-black"
                    >
                      Anime
                    </a>
                  </div>
                </div>
                <div className="relative md:ml-4">
                  <div className="relative">
                    <input
                      className="appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-black focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Type to search..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
