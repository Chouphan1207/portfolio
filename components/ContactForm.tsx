"use client";
import React from "react";

import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle, 
} from "@tabler/icons-react";

import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/TextArea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" md:bg-[#428ea2] p-2 md:rounded-2xl md:p-8 w-full lg:w-100 z-10">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-1 space-y-2 md:flex-row md:space-y-0 text-primary">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tin" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Phan Hoang Trong" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 text-primary">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 text-primary">
          <Label htmlFor="password">Phone Number</Label>
          <Input id="password" placeholder="" type="phone" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8 text-primary">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="Message"
            placeholder="Send me a message..."
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-10 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-800 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-20 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
export default ContactForm
