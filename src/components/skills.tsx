"use client";

import { useState } from "react";
import { Info } from "lucide-react";

import { Button } from "@ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  TooltipPortal,
} from "@ui/tooltip";

type SkillProps = {
  name: string;
  icon: string;
  info: string;
  wikiTitle: string;
};
type SkillsProps = {
  skills: SkillProps[];
};

const skillViewSize = 9;

function Skills({ skills }: SkillsProps) {
  const [size, setSize] = useState(skillViewSize);
  const _skills = skills.slice(0, size);

  return (
    <div className="relative mt-10 grid grid-cols-[repeat(var(--columns),var(--size))] justify-center gap-5 [--columns:2] [--size:1fr] sm:[--size:180px] md:[--columns:3]">
      <TooltipProvider delayDuration={300}>
        {_skills.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </TooltipProvider>

      {size !== skills.length && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-background px-5 pb-4 pt-16 text-center">
          <Button onClick={() => setSize(skills.length)}>See more</Button>
        </div>
      )}
    </div>
  );
}

const Skill = ({ name, icon, info, wikiTitle }: SkillProps) => {
  return (
    <div className="rounded-md border border-primary-900 p-3 transition-transform duration-200 hover:-translate-y-1 hover:scale-105">
      <div className="flex items-start justify-between">
        {/* Skill icon */}
        <img
          className="aspect-square w-10 object-cover"
          src={icon}
          alt={name}
        />
        {/* Skill info tooltip */}
        <Tooltip>
          <TooltipTrigger>
            <Info size={20} className="cursor-pointer text-primary" />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent>
              {info}{" "}
              <a
                target="_blank"
                className="text-primary-600 hover:text-primary-700"
                href={`https://en.wikipedia.org/wiki/${wikiTitle}`}
              >
                Wikipedia
              </a>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </div>
      <h4 className="mb-0 mt-3">{name}</h4>
    </div>
  );
};

export default Skills;
