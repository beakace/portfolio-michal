import React from "react";
import { FaReact } from "react-icons/fa";
import alma from "@/public/alma-placeholder.png";
import kalkulacjaLeasingu from "@/public/kalkulacja-leasingu-placeholder.png";
import searchGithub from "@/public/search-github-card.png";
import { BsWordpress } from "react-icons/bs";
import blogSS24 from "@/public/blog-ss24.png";

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
    title: "Junior Front-End Developer - part time",
    location: "Wrocław, PL",
    description:
      "I worked as a front-end developer on a website specializing in lease comparisons.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Junior Front-End Developer - Internship",
    location: "Wrocław, PL",
    description:
      "I worked as a front-end developer for administration application for non-profit organization.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Wordpress Blog",
    location: "Wrocław, PL",
    description:
      "I created a Blog page from scratch using Wordpress for my company while being a Marketing Manager.",
    icon: React.createElement(BsWordpress),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Kalkulacja Leasingu",
    description:
      "A website specializing in lease comparisons. Lots of various products. My first commercial project",
    tags: ["React", "Next.js", "Tailwind", "React Markdown"],
    imageUrl: kalkulacjaLeasingu,
    href: "google.com",
  },
  {
    title: "Alma Admin App",
    description:
      "Admin app for organizers of non-profit conference. I developed most of it and the app is currently in use in real life.",
    tags: ["React", "TypeScript", "Remix", "Material UI", "Prisma"],
    imageUrl: alma,
    href: "google.com",
  },
  {
    title: "Search Github",
    description:
      "App for searching github repositories. My first real react app not built with tutorials. This was my internship entry assignment.",
    tags: ["React", "Material UI", "TypeScript"],
    imageUrl: searchGithub,
    href: "https://search-github-black.vercel.app/",
  },
  {
    title: "Blog Sun Seasons 24",
    description:
      "I build blog page on Wordpress from scratch for my as I side job for my company. This sparked my interest in Frontend Development",
    tags: ["Wordpress"],
    imageUrl: blogSS24,
    href: "https://blog.sunseasons24.pl/",
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
