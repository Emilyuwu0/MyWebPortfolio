import Timeline from "../../assets/timeline.png";
import TimelineMobile from "../../assets/timeline-mobile.png";
import { motion } from "framer-motion";
import "./timeline.css";
import { fadeIn } from "../Util/Variants";
export default function TimelineMe() {
  const Activity = [
    {
      id: "1",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Frontend Developer",
      date: "Oct. 2022 - ene 2024",
      item: "AntPack · Jornada completa",
    },
    {
      id: "2",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Frontend Developer",
      date: "Ene. 2021 - oct. 2022",
      item: "IPCOM - Jornada completa",
    },
    {
      id: "4",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Junior Frontend ",
      date: "Setp. 2020 - Nov. 2020",
      item: "Pyra Lab · Jornada completa",
    },
    {
      id: "3",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Junior Frontend",
      date: "Mar. 2020 - sept. 2020",
      item: "Chefmenu · Jornada completa",
    },
  ];
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ opacity: 0 }}
    >
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 sm:mt-56 p-4 sm:p-0 rounded-xl container m-auto sm:w-3/5 2xl:w-2/4"
          id="exp"
        >
          <div className="bg-pink-soft-color p-8 sm:p-4 xl:p-4 2xl:p-2 text-black sm:rounded-l-xl rounded-t-xl sm:rounded-none">
            <div>
              <span className="block text-3xl font-medium mb-6 sm:mb-10 text-center sm:text-left sm:ml-14 mt-6 sm:mt-6 2xl:mt-8 ">
                Experiencia
              </span>

              <section className="relative flex flex-col overflow-hidden p-2  ">
                <div className="flex flex-col  ">
                  <div className="w-full  mx-auto sm:border-l-4 lg:ml-8  sm:ml-14 border-pink-light-color">
                    {Activity.map((activityItem) => (
                      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        <div className="relative ">
                          <div className="md:flex items-center md:space-x-4 mb-3 sm:ml-8">
                            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse ">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                  className="fill-emerald-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                >
                                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                              </div>
                            </div>

                            <div className=" sm:ml-2 ml-14 -mt-8 sm:mt-2 mb-6 sm:mb-2 ">
                              <span className=" font-medium">
                                {activityItem.name}
                              </span>{" "}
                            </div>
                          </div>

                          <div className="bg-pink-light-color p-4  mb-6 rounded sm:w-96 2xl:w-72 sm:ml-8 shadow ">
                            <span className="text-sm block">
                              {activityItem.date}
                            </span>
                            {activityItem.item}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/*  uno */}
          <div className="bg-pink-soft-color  sm:rounded-r-3xl">
            <img
              src={Timeline.src}
              alt="timeline"
              className="timeline-img absolute  hidden sm:block"
            />

            <img
              src={TimelineMobile.src}
              className="mt-0  -ml-0 2xl:ml-0 sm:hidden bg-white"
            />
          </div>
        </div>{" "}
      </motion.div>
    </motion.div>
  );
}
