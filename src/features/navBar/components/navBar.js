import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function NAvbar() {
  const categories = useSelector((state) => state.categories);
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
      <div class="grid grid-cols-4 gap-24 justify-between items-center mx-auto">
        <div class="pl-6">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden w-full md:block md:w-auto col-span-2 items-center"
          id="mobile-menu"
        >
          <ul class="flex justify-end  self md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <div class="text-cyan-500 hover:text-cyan-700">
              <Link to="/aboutUs">
                <li>About Us</li>
              </Link>
            </div>
            <div class="text-cyan-500 hover:text-cyan-700">
              <Link to="/about">
                <li>About</li>
              </Link>
            </div>
            <div class="text-cyan-500 hover:text-cyan-700  ">
              <div class="group1">
                <li class="cursor-pointer tracking-wide">
                  <button>Categories</button>
                  <div class="">
                    <div class="group1Child group absolute h-auto pt-4 ">
                      <ul class=" top-0 min-w-max bg-gray-800 list-none ">
                        {categories.map((category) => (
                          <li class="group2 flex">
                            <button class="block text-cyan-500 hover:text-cyan-700 cursor-pointer">
                              {category.name}
                            </button>
                            <div class="  h-auto absolute left-full">
                              <ul class="group2Child top-0 min-w-max bg-gray-800 ">
                                {category.products.map((product) => (
                                  <li class="p-1">
                                    <button class="block text-cyan-500 hover:text-cyan-700 cursor-pointer">
                                      {product.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div class="hidden w-full md:block md:w-auto items-center">
          <ul class="flex justify-end pr-6 self md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <div class="text-cyan-500">
              <Link to="/login">
                <li>Login</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NAvbar;
