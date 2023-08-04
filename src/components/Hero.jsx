import React from 'react'
import { TypeAnimation } from "react-type-animation";
import img1 from '../assets/img1.png'
import { motion } from 'framer-motion';
import  { fadeIn } from '../../src/variants'


const Hero = () => {
  return (
    <div
      id="home"
      className="select-none w-[80%]   md:items-center  mt-10 flex gap-y-10 justify-between  flex-col md:flex-row  mx-auto "
    >
      <div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" dark:text-white mx-auto md:mx-none   max-w-lg  text-[30px] lg:text-[38px]"
        >
          <motion.h1>Hello it's me</motion.h1>
          <motion.span>
            I am
            <TypeAnimation
              sequence={[" Web Developer", 2000, " Designer", 2000]}
              speed={50}
              className="text-accent dark:text-lime-200 text-blue-700"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.span>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" mt-4 text-[18px]"
          >
            I love develop new website design. So give me a chance to develop
            your website.{" "}
          </motion.p>
          <motion.button
            // initial={{ scale: 1 }}
            // whileHover={{
            //   scale: [1.1, 1, 1.1, 1.1, 1, 1.1, 1],
            //   transition: { duration: 4 },
            // }}
            className="dark:border-slate-950 hover:animate-bounce border-blue-950 dark:bg-slate-900 py-2 px-5 bg-blue-500 border text-sm rounded-xl"
          >
            Hire me
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <img
          className="  mx-auto md:mx-none h-[300px] rounded-full"
          src={img1}
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Hero