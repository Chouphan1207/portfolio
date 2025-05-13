import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



export function RecentProjects() {
    const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 2.5,
      spacing: 16,
    },
  })
  const data = [
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="mb-8 text-md font-normal text-title">
            Built and launched UX/UI Guitar Online Shop from scratch with Flutter<br />
            for my University&apos;s Final Project
          </p>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["rp1", "rp2", "rp3", "rp4"].map((img, i) => (
              <img
                key={i}
                src={`/recent_projects/${img}.jpg`}
                alt="Recent Project"
                className="w-50 h-100 aspect-[3/2] rounded-lg object-cover shadow-md snap-start"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-description">
            I&apos;ve reached a lot of milestones, including earning my Bachelor&apos;s degree in Web Development.
          </p>
          <p className="mb-8 text-sm font-normal text-description">
            Or getting a 7.0 IELTS score.
          </p>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["graduation2", "graduation", "ielts",].map((img, i) => (
              <img
                key={i}
                src={`/recent_projects/${img}.jpg`}
                alt="Milestone"
                className="w-50 h-100 aspect-[3/2] rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] snap-start"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


export default RecentProjects
