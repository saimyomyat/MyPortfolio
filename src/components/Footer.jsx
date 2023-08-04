import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import {BsTelephoneForward} from 'react-icons/bs'
import { BsFacebook,BsInstagram,BsGithub, BsTelegram } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from "../../src/variants";

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className=" h-screen mb-20 mt-20 w-[80%] mx-auto"
    >
      <motion.div
        id="contact"
        className="  text-blue-600 dark:text-white
      mx-auto text-center leading-3 
      font-semibold text-2xl "
      >
        {" "}
        Get In Touch
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" rounded-lg mt-6 flex-col md:flex-row flex 
        p-10 dark:bg-slate-500 
       bg-blue-400   gap-6  "
      >
        <motion.div
          className=" mx-auto md:mx-0 md:w-[70%] w-full 
           flex gap-4 flex-col   "
        >
          <motion.input
            whileHover={{
              scale: [1.05, 1.02, 1.05, 1.02, 1],
              transition: {
                duration: 1.5,
              },
            }}
            type="text"
            className=" dark:text-white dark:bg-slate-600 border 
               dark:border-slate-900
             text-blue-900  border-blue-600 rounded-md
              focus:border-blue-900 py-1 px-2  outline-none bg-blue-600"
            placeholder=" Your Name"
          />

          <motion.input
            whileHover={{
              scale: [1.05, 1.02, 1.05, 1.02, 1],
              transition: {
                duration: 1.5,
              },
            }}
            type="text"
            className="border  dark:border-slate-900  dark:text-white dark:bg-slate-600 text-blue-900 border-blue-600 rounded-md
             focus:border-blue-900  py-1 px-2  outline-none bg-blue-600"
            placeholder=" Your Email"
          />
          <motion.textarea
            whileHover={{
              scale: [1.05, 1.02, 1.05, 1.02, 1],
              transition: {
                duration: 1.5,
              },
            }}
            placeholder="Your Message"
            className="  dark:text-white  dark:border-slate-900 dark:bg-slate-600 text-blue-900 px-2 py-1 outline-none border border-blue-600 rounded-md focus:border-blue-900   rounded-md bg-blue-600"
            name=""
            cols="20"
            rows="10"
          ></motion.textarea>
          <motion.button
            whileHover={{
              scale: [1.05, 1.02, 1.05, 1.02, 1],
              transition: {
                duration: 1.5,
              },
            }}
            className=" dark:text-white dark:bg-slate-600 bg-blue-600 py-2 rounded-lg text-blue-300"
          >
            Send
          </motion.button>
        </motion.div>
        <motion.div className=" mx-auto md:mx-0 flex flex-col gap-4">
          <div className=" flex gap-4">
            <TfiEmail className=" cursor-pointer dark:text-slate-600  text-2xl text-blue-800" />{" "}
            <p className=" cursor-pointer dark:text-white">
              saimyomyat979@gmail.com
            </p>
          </div>
          <div className="cursor-pointer dark:text-white  flex gap-4">
            <BsTelephoneForward className="cursor-pointer dark:text-slate-600 text-2xl text-blue-800" />{" "}
            <p>09977158048</p>
          </div>
          <div className="  flex gap-4 justify-center">
            <div>
              <a
                href="https://www.facebook.com/sai.m.mayt.792"
                target=" _blank"
              >
                <BsFacebook className="cursor-pointer hover:animate-bounce  text-blue-600 text-3xl" />
              </a>
            </div>
            <div>
              <a href="https://t.me/oosai17" target=" _blank">
                <BsTelegram className="cursor-pointer hover:animate-bounce  text-cyan-600 text-3xl" />
              </a>
            </div>
            <div>
              <a href="https://github.com/saimyomyat" target=" _blank">
                <BsGithub
                  className=" cursor-pointer hover:animate-bounce
               text-slate-950 text-3xl"
                />
              </a>
            </div>
            <div></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Footer