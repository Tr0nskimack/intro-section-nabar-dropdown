import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-10 mx-auto flex w-full max-w-7x1 justify-between px-4 py-5 text-sm">
      {/* left side */}

      <section className="flex items-center gap-10">
        {/* logo */}
        <img src="/logo.svg" className="w-18" alt="imagen" />
        {/* nav links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-4 transition-all">
            <Link to={"/"} className="relative group px-2 py-3 transition-all">
              <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                <span className="font-semibold">Features</span>
                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
              </p>
              {/* dropdown */}
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img src="/notes.svg" className="w-4" alt="item-icon" />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Tareas</span>
                </Link>

                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img
                    src="/calendar-svgrepo-com.svg"
                    className="w-4"
                    alt="item-icon"
                  />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Calendario</span>
                </Link>
                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img
                    src="/time-alert-svgrepo-com.svg"
                    className="w-4"
                    alt="item-icon"
                  />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Recordatorio</span>
                </Link>
                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img
                    src="/business-strategy-svgrepo-com.svg"
                    className="w-4"
                    alt="item-icon"
                  />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Planeacion</span>
                </Link>
              </div>
            </Link>
          </div>
          {/* company */}
          <div className="flex items-center gap-4 transition-all">
            <Link to={"/"} className="relative group px-2 py-3 transition-all">
              <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                <span className="font-semibold">Company</span>
                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
              </p>
              {/* dropdown */}
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img src="/notes.svg" className="w-4" alt="item-icon" />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">History</span>
                </Link>

                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img
                    src="/calendar-svgrepo-com.svg"
                    className="w-4"
                    alt="item-icon"
                  />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Our team</span>
                </Link>
                <Link
                  to={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  {/* image */}
                  <img
                    src="/time-alert-svgrepo-com.svg"
                    className="w-4"
                    alt="item-icon"
                  />

                  {/* item */}
                  <span className="whitespace-nowrap pl-3">Blog</span>
                </Link>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4 transition-all">
            <Link to={"/"} className="relative group px-2 py-3 transition-all">
              <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                <span className="font-semibold">Carrers</span>
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4 transition-all">
            <Link to={"/"} className="relative group px-2 py-3 transition-all">
              <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                <span className="font-semibold">Acerca</span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* right side data */}
      <section className=" hidden md:flex items-center gap-8">
        <button className="text-neutral-400 transition-all hover:text-black/90 hover:font-bold h-fit">
          Login
        </button>
        <button className="text-neutral-400 rounded-xl border-2 hover:border-black hover:font-bold px-4 py-2 transition-all hover:text-black/90 h-fit">
          Registro
        </button>
      </section>

      {/* mobile de aqui para abajo*/}
      <div className="z-20">
        <div onClick={handleNav} className="block md:hidden text-black_p cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "text-gray-300 fixed h-full right-0 top-0 w-[60%] border-l border-l-900 bg-White_p ease-in-out duration-500"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end mt-5 pr-5">
            <div onClick={handleNav} className="block md:hidden text-black_p cursor-pointer">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>

          {/* menu mobile */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-4 transition-all pl-4">
              <Link
                to={"/"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                  <span className="font-semibold text-lg">Features</span>
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                </p>
                {/* dropdown */}
                <div className="absolute left-5 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white_p py-3 transition-all group-hover:flex">
                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img src="/notes.svg" className="w-4" alt="item-icon" />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      Tareas
                    </span>
                  </Link>

                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img
                      src="/calendar-svgrepo-com.svg"
                      className="w-4"
                      alt="item-icon"
                    />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      Calendario
                    </span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img
                      src="/time-alert-svgrepo-com.svg"
                      className="w-4"
                      alt="item-icon"
                    />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      Recordatorio
                    </span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img
                      src="/business-strategy-svgrepo-com.svg"
                      className="w-4"
                      alt="item-icon"
                    />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      Planeacion
                    </span>
                  </Link>
                </div>
              </Link>
            </div>
            {/* company */}
            <div className="flex items-center gap-4 transition-all mt-[160px] pl-4">
              <Link
                to={"/"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                  <span className="font-semibold text-lg">Company</span>
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                </p>
                {/* dropdown */}
                <div className="absolute left-10 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white_p py-3 transition-all group-hover:flex">
                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img src="/notes.svg" className="w-4" alt="item-icon" />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      History
                    </span>
                  </Link>

                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img
                      src="/calendar-svgrepo-com.svg"
                      className="w-4"
                      alt="item-icon"
                    />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">
                      Our team
                    </span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    {/* image */}
                    <img
                      src="/time-alert-svgrepo-com.svg"
                      className="w-4"
                      alt="item-icon"
                    />

                    {/* item */}
                    <span className="whitespace-nowrap pl-3 text-lg">Blog</span>
                  </Link>
                </div>
              </Link>
            </div>
            {/* carrers about */}
            <div className="flex flex-col justify-start mt-[100px]">
              <div className="flex items-center gap-4 transition-all">
                <Link
                  to={"/"}
                  className="relative group px-2 py-3 transition-all"
                >
                  <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                    <span className="font-semibold text-lg">Carrers</span>
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-4 transition-all">
                <Link
                  to={"/"}
                  className="relative group px-2 py-3 transition-all"
                >
                  <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
                    <span className="font-semibold text-lg">About</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <section className="flex flex-col gap-8 items-center mt-[60px]">
            <button className="text-neutral-400 transition-all hover:text-black/90 hover:font-bold h-fit">
              Login
            </button>
            <button className="text-neutral-400 rounded-xl border-2 hover:border-black hover:font-bold px-12 py-2 transition-all hover:text-black/90 h-fit">
              Registro
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
