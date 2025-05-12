import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function RecentProjects() {
  const data = [
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="mb-8 text-md font-normal text-title">
            Built and launched UX/UI Guitar Online Shop from scratch with Flutter<br />
            for my University&apos;s Final Project
          </p>
          <div className="flex gap-4">
            <img
              src="/recent_projects/rp1.jpg"
              alt="Recent Picture"
              className="w-50 h-100 aspect-[3/2] rounded-lg object-cover shadow-md"
            />
            <img
              src="/recent_projects/rp2.jpg"
              alt="Recent Picture"
              className="w-50 aspect-[3/2] rounded-lg object-cover shadow-md"
            />
            <img
              src="/recent_projects/rp3.jpg"
              alt="Recent Picture"
              className="w-50 aspect-[3/2] rounded-lg object-cover shadow-md"
            />
            <img
              src="/recent_projects/rp4.jpg"
              alt="Recent Picture"
              className="w-50 aspect-[3/2] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-description md:text-sm">
            I&apos;ve reached a lot of milestones, including earning my Bachelor's degree in Web Development.
          </p>
          <p className="mb-8 text-sm font-normal text-description md:text-sm ">
            or getting a 7.0 IELTS degree.
          </p>
          <div className="flex gap-4">
            <img
              src="/recent_projects/graduation.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-100 w-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/recent_projects/ielts.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-100 w-40 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
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
