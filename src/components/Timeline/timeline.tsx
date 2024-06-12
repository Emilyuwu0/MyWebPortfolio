import Timeline from "../../assets/timeline_assets.png";
import "./timeline.css"
export default function TimelineMe() {
  const Activity = [
    {
        img:"https://www.clker.com//cliparts/w/M/5/G/9/9/pink-circle-hi.png",
      name: "uwu",
      date: "2017-01-01",
      item: "awa",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:mt-56 2xl:mt-80">
      <div>
        <img src={Timeline.src} />
      </div>
      <div className="bg-pink-light-color p-4 text-black">
        <div className="sm:mt-32">
          <span className="block text-3xl font-medium mb-4 text-center sm:text-left">
            Experiencia
          </span>

          <div>
            <ul role="list" className="space-y-6">
              {Activity.map((activityItem) => (
       
                <div className=" ">
                  <div className="space-y-6 border-l-2 border-dashed">
                    <div className="relative w-full">
                     <img src={activityItem.img} className="w-6 -ml-3"/>
                      <div className="ml-6">
                        <h4 className="font-bold text-blue-500">{activityItem.name}.</h4>
                        <span className="mt-1 block text-sm font-semibold text-blue-500">{activityItem.date}</span>
                        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">{activityItem.item}</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
