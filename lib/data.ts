import React from "react";
import { FaReact } from "react-icons/fa";
import alma from "@/public/alma-placeholder.png";
import kalkulacjaLeasingu from "@/public/kalkulacjaleasingu.pl.png";
import searchGithub from "@/public/search-github-card.png";
import { BsWordpress } from "react-icons/bs";
import blogSS24 from "@/public/blog-ss24.png";
import nieziemsko from "@/public/nieziemsko.png";
import chordon from "@/public/chordon-app.png";
// Local data source only – no Sanity client
import wzrokOk from "@/public/wzrokok.png";
import saraStudio from "@/public/sarastudiowokalne.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer - freelance",
    location: "Wrocław, PL",
    description:
      "I am currently a freelance Frontend Developer having worked on multiple real-life projects.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Junior Frontend Developer - Internship",
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
    title: "Sara Studio Wokalne",
    description:
      "Landing page for a vocal coach. Designed and developed by me.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: saraStudio,
    href: "https://www.sarastudiowokalne.pl/",
  },
  {
    title: "Wzrok Ok! Sklep",
    description:
      "Ecommerce shop built on WordPress with a focus on eye care products.",
    tags: ["Wordpress", "WooCommerce"],
    imageUrl: wzrokOk,
    href: "https://wzrokok.pl/",
  },
  {
    title: "Nieziemsko",
    description:
      "I developed a landing page from scratch for an organization using Next.js. The project demanded swift and efficient work, and I am pleased that I was able to deliver the final product in a short timeframe.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: nieziemsko,
    href: "https://nieziemsko.com",
  },
  {
    title: "Kalkulacja Leasingu",
    description:
      "I coded the entire front-end of a website for a company specializing in lease comparisons. It included numerous subpages, requiring significant effort and a strong command of CSS and Next.js.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: kalkulacjaLeasingu,
    href: "https://kalkulacjaleasingu.pl",
  },
  {
    title: "Chordon",
    description:
      "A chord progression generator that helps musicians create unique progressions. Integrated with the Hooktheory API for music theory analysis and suggestions.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion", "Hooktheory API"],
    imageUrl: chordon,
    href: "https://chordon.vercel.app",
  },
  {
    title: "Admin App",
    description:
      "Admin app for organizers of non-profit conference. I developed most of it and the app is currently in use in real life.",
    tags: ["React", "TypeScript", "Remix", "Material UI", "Prisma"],
    imageUrl: alma,
    href: "https://github.com/beakace/alma-admin-app",
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
      "I build this blog page on Wordpress from scratch as a side job for my company. This sparked my interest in Frontend Development",
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
  "ERB",
  "Wordpress",
  "Git",
  "Tailwind",
  "MaterialUI",
  "Prisma",
  "Framer Motion",
] as const;

export async function getProjects() {
  // Map local data to the Project type shape expected by the UI
  return projectsData.map((project, index) => ({
    _id: String(index + 1),
    ...project,
    imageWidth: 1920,
    imageHeight: 1080,
  }));
}
