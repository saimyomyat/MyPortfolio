import React from 'react'
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { fadeIn } from "../../src/variants";
import img2 from "../assets/img2.png";






const About = () => {
   const { ref, inView} = useInView({
     /* Optional options */
     threshold: 0.5,
   });
  return (
    <div
      id="about"
      className="  select-none 
       gap-4 flex md:flex-row flex-col-reverse justify-between items-center
        mt-10 w-[80%] mx-auto"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" font-semibold  text-blue-800 dark:text-white mx-auto
         md:mx-0 w-[80%] md:w-[50%]"
      >
        <div className=" w-[80%] mx-auto md:mx-0">
          <div className="    flex justify-between">
            <h1 className=" text-1xl">Name</h1>
            <span className=" text-1xl">
              {inView ? (
                <TypeAnimation
                  sequence={["Sai Myo Myat", 200]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              ) : null}
            </span>
          </div>
          <div className="  flex justify-between">
            <h1 className=" text-1xl">Age</h1>
            <span ref={ref} className=" text-1xl">
              {inView ? <CountUp start={0} end={24} duration={3} /> : null}

              <span className=" ms-2">years old</span>
            </span>
          </div>
          <div className=" flex justify-between">
            <h1 className=" text-1xl">Position</h1>
            <span className="  text-1xl">Frontend Developer</span>
          </div>
          <div className=" mt-3 text-sm ">
            I have no experiences in this job.So,I want to serve as a junior
            developer.
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="  duration-500 dark:bg-slate-500 bg-blue-400 cursor-pointer rounded-full p-5"
      >
        <img
          className="  w-[200px] h-[200px] object-contain rounded-full"
          src={img2}
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default About