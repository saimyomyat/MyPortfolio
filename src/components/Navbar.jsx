import React, { useEffect, useState } from "react";
import{BiMenu} from 'react-icons/bi'
import { GrClose, GrMenu } from "react-icons/gr";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";


const Navbar = () => {
  // menu bar for open and close state
  const [open , setOpen] = useState(false)
  //
  //for dark mode 
  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    if(localStorage.getItem('theme') === 'dark'){
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    }else{
       document.documentElement.classList.remove("dark");
       localStorage.setItem("theme", "light");
    }
  },[theme])
  const darkModeHandler = ()=>{
    setTheme(theme === 'dark' ? 'light': 'dark')
    localStorage.setItem('theme', theme === 'dark' ? 'dark' : 'light')
  }
  
  // ==========================
  const menus = [
    {
      name: "HOME",
      link: "home",
      offset:-150
    },
    {
      name: "ABOUT",
      link: "about",
      offset:-50
    },
    {
      name: "SKILL",
      link: "skill",
      offset: 50
    },
    {
      name: "CONTACT",
      link: "contact",
      offset: 0,
    },
  ];
  return (
    <nav
      className="  bg-blue-400 shadow dark:bg-slate-500
     sticky top-0 z-[999] rounded-s-md mt-1 py-4 rounded-lg  pr-10  pl-10 
    
     "
    >
      <div className=" flex items-center justify-between ">
        <div>
          <h1 className=" dark:text-white text-lg font-semibold leading-1">
            Sai
            <span className=" ms-1 text-blue-700">Myo</span>
            <span className=" ms-1">Myat</span>
          </h1>
        </div>
        <div className=" flex gap-7 items-center">
          <div
            className="   rounded-md py-1  px-6 hidden lg:block
         rounded-bl-full bg-blue-500 dark:bg-slate-600 dark:text-white
         "
          >
            <ul className=" cursor-pointer select-none flex items-center gap-1 py-2  text-lg">
              {menus.map((menu, i) => {
                return (
                  <li key={i} className=" px-6  hover:text-blue-300 ">
                    {/* <a href={menu.link}>{menu.name}</a> */}
                    <Link
                      
                      to={menu.link}
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                     
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            onClick={darkModeHandler}
            className=" bg-transparent duration-300 cursor-pointer text-3xl"
          >
            {theme === "dark" ? <BsFillMoonStarsFill /> : <BsSun />}
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="z-[999]  block lg:hidden text-3xl cursor-pointer"
        >
          {open ? <GrClose /> : <GrMenu />}
        </div>
        <div
          className={` ${open && " top-full"}  lg:hidden w-full   
          bg-transparent  absolute top-[-1000%] right-0 
         px-7 py-2 duration-300 rounded-lg 
         `}
        >
          <ul className="  flex flex-col justify-center gap-3 text-lg py-2 h-full">
            {menus.map((menu, i) => {
              return (
                <motion.li
                  whileHover={{
                    scale: [1.05, 1.02, 1.05, 1.02, 1],
                    transition: {
                      duration: 1.5,
                    },
                  }}
                  key={i}
                  className=" cursor-pointer bg-blue-600 dark:text-white dark:bg-slate-900 rounded-lg py-3 px-3  select-none  hover:text-blue-400"
                >
                  <Link onClick={()=>setOpen(false)}
                    to={menu.link}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    {menu.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
