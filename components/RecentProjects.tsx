import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import "keen-slider/keen-slider.min.css"



export function RecentProjects() {
  const data = [
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="mb-8 text-lg font-normal text-title">
            Built and launched UX/UI Guitar Online Shop from scratch with Flutter<br />
            for my University&apos;s Final Project
          </p>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["rp1", "rp3", "rp6", "rp2", "rp4", "rp5"].map((img, i) => (
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
          <p className="mb-4 text-lg font-normal text-title">
            I&apos;ve reached a lot of milestones, including earning my Bachelor&apos;s degree in Web Development.
          </p>
          <p className="mb-8 text-lg font-normal text-title">
            Or getting a 7.0 IELTS score.
          </p>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["graduation2", "graduation", "ielts", "blog7" ,].map((img, i) => (
              <img
                key={i}
                src={`/recent_projects/${img}.jpg`}
                alt="Milestone"
                className="w-50 h-100 aspect-[3/2] rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] snap-start"
              />
            ))}
          </div>
            <p className="mb-8 text-lg font-normal text-description pt-3">
              But also, I was conscripted into the military shortly after graduating.
            </p>
        </div>
      ),
    },
        {
      title: "Military Duty",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-title">
            Early in my duty, I was tasked with leading a team under high-pressure conditions, which tested my problem-solving abilities and resilience in trainning.
          </p>
            <p className="mb-4 text-md font-normal text-description">
            I was entrusted mainly with handling confidential documents. I regularly used Excel to track inventory, personnel records, or administrative logs, and developed templates and systems that improved speed and accuracy in daily operations.
          </p>

          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["duty1", "duty2", "duty3", "duty4", "duty5",].map((img, i) => (
              <img
                key={i}
                src={`/recent_projects/${img}.jpg`}
                alt="Milestone"
                className="h-100 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] snap-start"
              />
            ))}
          </div>
        </div>
      ),
    },
        {
      title: "Military Medical Corps",
      content: (
        <div>
          <p className="mb-4 text-md font-normal text-title">
            My military medic training focused on bandaging, basic patient care, and medical support. Gained hands-on experience in treating wounds and assisting with recovery in both training and duty settings.
          </p>

          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4 mask-fade">
            {["medic4", "medic2", "medic1", "medic3", "medic5",].map((img, i) => (
              <img
                key={i}
                src={`/recent_projects/${img}.jpg`}
                alt="Milestone"
                className="h-100 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] snap-start"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4 text-xl font-normal text-title">
            With my military service nearing completion, I&apos;ve been relearning web development and am currently exploring job opportunities to grow my career in tech.
          </p>


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
