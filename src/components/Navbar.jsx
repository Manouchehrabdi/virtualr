import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 shadow-md bg-white border-neutral-700/80	">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a className="text-lg font-bold " href="#" >
              Programing
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index} className=" hover:text-blue-600">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <a
              href="#"
              className="py-2 px-3 border rounded-md bg-indigo-700 text-red-50	 "
            >
              ورود
            </a>
            <a
              href="#"
              className="py-2 px-3 border rounded-md bg-indigo-700 text-red-50"
            >
              ثبت نام
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="relative backdrop-blur-lg right-0 z-20 w-full p-12 flex flex-col  items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3 hover:text-blue-600">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 ">
              <a
                href="#"
                className="py-2 px-3 border rounded-md bg-indigo-700 text-red-50"
              >
                ورود
              </a>
              <a
                href="#"
                className="py-2 px-3 border rounded-md bg-indigo-700 text-red-50"
              >
                ثبت نام
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
