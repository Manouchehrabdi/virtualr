import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
const Navbar = () => {
  const
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w10 mr-2" src={logo} alt="logo" />
              <span className="text-xl traking-tight">virtualLR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex jusstify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3  border rounded-md">ورود</a>
              <a href="#" className="py-2 px-3 border bg-gradient-to-r from-orange-500 to-orange-800 ">ثبت نام</a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
