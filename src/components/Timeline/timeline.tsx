import Timeline from "../../assets/timeline.png";
import "./timeline.css";
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
      name: "Desarrollador de Front-end",
      date: "Ene. 2021 - oct. 2022",
      item: "IPCOM - Jornada completa",
    },
    {
      id: "3",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Desarrolladora Junior Front-end",
      date: "Mar. 2020 - sept. 2020",
      item: "Chefmenu · Jornada completa",
    },
    {
      id: "4",
      img: "https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "Desarrolladora Junior ",
      date: "Ago. 2016 - ene. 2020",
      item: "RednaJava",
    },
  ];
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:mt-56 2xl:mt-80   rounded-xl container m-auto"
      id="exp"
    >
      <div className="bg-pink-soft-color  p-8 text-black sm:rounded-l-xl ">
        <div>
          <span className="block text-3xl font-medium mb-4 text-center sm:text-center sm:ml-20">
            Experiencia
          </span>

          <section className="relative flex flex-col justify-center overflow-hidden p-2  items-end ">
            <div className="flex flex-col  ">
              <div className="w-full max-w-3xl mx-auto">
                {Activity.map((activityItem) => (
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    <div className="relative">
                      <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
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

                        <div className=" ml-12 -mt-8 sm:mt-2 mb-6 sm:mb-2">
                          <span className=" font-medium">
                            {activityItem.name}
                          </span>{" "}
                        </div>
                      </div>

                      <div className="bg-pink-light-color p-4  mb-6 rounded sm:w-96 shadow ">
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
      <div className="bg-pink-soft-color  sm:rounded-r-xl">
        <img src={Timeline.src} alt="timeline" className="timeline-img absolute"/>
      </div>
    </div>
  );
}
