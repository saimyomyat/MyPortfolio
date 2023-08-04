import React from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { FaReact } from "react-icons/fa";
import { SiCss3, SiBootstrap } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { animate, delay, motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { fadeIn } from "../../src/variants";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper/modules";

const Skill = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const mySkill = [
    {
      id: 1,
      name: "HTML",
      percent: 86,
      icon: <TfiHtml5 />,
    },
    {
      id: 2,
      name: "CSS",
      percent: 80,
      icon: <SiCss3 />,
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      percent: 75,
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      name: "REACT",
      percent: 80,
      icon: <FaReact />,
    },
    {
      id: 5,
      name: "TAILWIND",
      percent: 75,
      icon: <TbBrandTailwind />,
    },
    {
      id: 6,
      name: "BOOTSTRAP",
      percent: 86,
      icon: <RiBootstrapLine />,
    },
  ];
  return (
    <div id="skill">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-24 w-[80%] max-w-[80%]
       text-blue-600 dark:text-white
      mx-auto text-center leading-3 
      font-semibold text-2xl"
      >
        My Skill
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
       
        className="     md:flex-row flex-col flex  
    justify-between items-center    max-w-[80%] mx-auto"
      >
        <Swiper
          spaceBetween={0}
          className=" overflow-hidden   max-w-[80%] cursor-pointer bg-transparent   py-10   "
          breakpoints={{
           768: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {mySkill.map((s) => {
            return (
              <SwiperSlide key={s.id} className=" overflow-hidden">
                <div
                  className="mx-auto overflow-hidden dark:bg-slate-500 dark:text-white bg-blue-400
        border-2 border-cyan-600   dark:border-slate-700 
         rounded-xl pt-14 pb-4 p-10 relative w-[11rem]  lg:w-[15rem] "
                >
                  <motion.div
                    style={{
                      background: ` conic-gradient(rgb(8,145,170),${s.percent}%, #ddd ${s.percent}%)`,
                    }}
                    className=" lg:translate-x-3 translate-x-0 flex items-center  justify-center  
             lg:w-32 lg:h-32 w-24 h-24 rounded-full "
                  >
                    <div
                      className=" flex items-center justify-center
                     lg:w-28 w-20 h-20 text-blue-600 dark:text-slate-800
                      lg:h-28 dark:bg-slate-400 bg-blue-200 rounded-full   text-6xl"
                    >
                      {s.icon}
                    </div>
                  </motion.div>
                  <div className=" flex items-center justify-center mt-4">
                    <p className=" font-semibold text-blue-950
                     dark:text-yellow-50 text-2xl text-center ">
                      {s.name}
                    </p>
                  </div>
                  <motion.div
                    initial="hidden"
                    ref={ref}
                    whileInView={{ rotate: [45, 90, 180, 360, 45] }}
                    className=" rotate-45  lg:block dark:bg-slate-800
                       bg-blue-600 py-1 rounded px-4 absolute top-[0px] 
                        right-[-1rem]"
                  >
                    <span ref={ref} className=" text-1xl">
                      <CountUp start={0} end={s.percent} duration={2} />

                      <span className=" ms-2">%</span>
                    </span>
                  </motion.div>
                  {/* <motion.div
                    className=" lg:hidden    dark:bg-slate-800
                       bg-blue-600 py-1 rounded px-4 absolute top-[-15px] 
                        right-[3rem]"
                  >
                    <span ref={ref} className=" text-1xl">
                      <CountUp start={0} end={s.percent} duration={2} />

                      <span className=" ms-2">%</span>
                    </span>
                  </motion.div> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <dir></dir>
      </motion.div>
    </div>
  );
};

export default Skill;
