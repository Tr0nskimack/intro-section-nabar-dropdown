import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Navbar = () => {
  const [Menu, setMenu] = useState([]);
  const [Company, setCompany] = useState([]);

  const MenuFeatures = [
    {
      nombre: "Features",
      icono: "icon-todo.svg",
      enlace: "/",
    },
    {
      nombre: "Calendar",
      icono: "icon-calendar.svg",
      enlace: "/",
    },
    {
      nombre: "Planning",
      icono: "icon-planning.svg",
      enlace: "/",
    },
    {
      nombre: "Reminder",
      icono: "icon-reminders.svg",
      enlace: "/",
    },
  ];
  const MenuCompany = [
    {
      nombre: "Histoy",
      enlace: "/",
    },
    {
      nombre: "Our Team",
      enlace: "/",
    },
    {
      nombre: "Blog",
      enlace: "/",
    },
  ];
  useEffect(() => {
    setMenu(MenuFeatures);
    setCompany(MenuCompany);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side */}

      <section className="flex items-center gap-10">
        {/* logo */}
        <img src="logo.svg" alt="logo" />
        <MobileNav />
        {/* navItems */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          <Link className="relative group px-2 py-3 transition-all">
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
              Features
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
            </p>
            {/* dropwown */}
            <div className="absolute rigt-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
              {Menu.map((featu) => {
                return (
                  <Link className="flex gap-2 cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                    <img src={featu.icono} alt="icono" />
                    <span key={featu.id} className="whitespace-nowrap pl-2">
                      {featu.nombre}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Link>
          <Link className="relative group px-2 py-3 transition-all">
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
              Company
              <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
            </p>
            {/* dropwown */}
            <div className="absolute rigt-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
              {Company.map((compa) => {
                return (
                  <Link className="flex gap-2 cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                    <span key={compa.id} className="whitespace-nowrap pl-2">
                      {compa.nombre}
                    </span>
                  </Link>
                );
              })}
            </div>
          </Link>
          <Link className="relative group px-2 py-3 transition-all">
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
              Carrer
            </p>
          </Link>
          <Link className="relative group px-2 py-3 transition-all">
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
              About
            </p>
          </Link>
        </div>
      </section>
      {/* buttons */}
      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>
        <button className="h-fit text-neutral-400 rounded-xl transition-all hover:border-2 border-2 border-neutral-400 px-4 py-2 hover:border-black hover:text-black/90">
          Registro
        </button>
      </section>
      <FiMenu
        onClick={toggleMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );

  function MobileNav() {
    const [parent, enable] = useAutoAnimate({ duration: 500 });

    return (
      <div
        ref={parent}
        className={`fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 transition-all duration-500 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="h-full w-[65%] bg-white px-4 py-4">
          <section className="flex justify-end">
            <AiOutlineClose
              className="cursor-pointer text-4xl"
              onClick={toggleMenu}
            />
          </section>
          {/* mobile items */}
          <div className="flex flex-col items-center gap-4 transition-all">
            <Link className="relative group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                Features
                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
              </p>
              {/* dropwown */}

              <div className="absolute rigt-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                {Menu.map((featu) => {
                  return <SingleNavItem featu={featu} key={featu.nombre} />;
                })}
              </div>
            </Link>

            <Link className="relative group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                Company
                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
              </p>
              {/* dropwown */}
              <div className="absolute rigt-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                {Company.map((compa) => {
                  return (
                    <Link
                      key={compa.id}
                      className="flex gap-2 cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      <span key={compa.id} className="whitespace-nowrap pl-2">
                        {compa.nombre}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Link>
            <Link className="relative group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                Carrer
              </p>
            </Link>
            <Link className="relative group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                About
              </p>
            </Link>
            {/* buttons */}
            <section className="flex flex-col items-center gap-8 mt-40">
              <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
                Login
              </button>
              <button className="h-fit text-neutral-400 rounded-xl transition-all hover:border-2 border-2 border-neutral-400 px-4 py-2 w-[250px] hover:border-black hover:text-black/90">
                Registro
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }

  function SingleNavItem({ featu }) {
    const [isItemOpen, setItem] = useState(false);
    const toggleItem = () => {
      /* alert("hola") */
      setItem(!isItemOpen);
    };
    return (
      <div>
        <Link
          onClick={toggleItem}
          className="flex gap-2 cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
        >
          <img src={featu.icono} alt="icono" />
          <span className="whitespace-nowrap pl-2">{featu.nombre}</span>
        </Link>
      </div>
    );
  }
};
export default Navbar;
