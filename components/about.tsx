"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working for couple years in{" "}
        <span className="font-medium">marketing</span> field, I decided to
        pursue my passion for programming. I was lucky enough to have couple of
        experienced web developers as my friends so I started{" "}
        <span className="font-semibold">working on real projects</span> as soon
        I've got acquainted with basics of HTML, CSS and JavaScript{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React (Next.js, Remix), Tailwind</span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently open for offers for{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span>
          I'm a happy husband and a father of{" "}
          <span className="font-bold">TWO</span> two year old boys
        </span>
        . Currently my fulltime job is being an IT Project Manager. Also before
        I started coding I was a part time professional musician but now in my
        free time I focus on being a better programmer. I love{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
