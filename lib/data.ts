import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import alma from "@/public/alma-placeholder.png";
import kalkulacjaLeasingu from "@/public/kalkulacja-leasingu-placeholder.png";
import searchGithub from "@/public/search-github-placeholder.png";
import { BsWordpress } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Wordpress Blog - Sun Seasons 24",
    location: "Wrocław, PL",
    description:
      "I created a Blog page from scratch using Wordpress for my company while being Marketing Manager",
    icon: React.createElement(BsWordpress),
    date: "2021 - 2022",
  },
  {
    title: "Junior Front-End Developer - Internship",
    location: "Wrocław, PL",
    description:
      "I worked as a front-end developer for administration application for non-profit organization",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Junior Front-End Developer - kalkulacja-leasingu.pl",
    location: "Wrocław, PL",
    description:
      "I worked as a front-end developer for a website that compares leasing offers",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Kalkulacja Leasingu",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind", "React Markdown"],
    imageUrl: kalkulacjaLeasingu,
  },
  {
    title: "Alma Admin App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Remix", "Material UI", "Prisma"],
    imageUrl: alma,
  },
  {
    title: "Search Github",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Material UI", "TypeScript"],
    imageUrl: searchGithub,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Wordpress",
  "Git",
  "Tailwind",
  "MaterialUI",
  "Prisma",
  "Framer Motion",
] as const;
