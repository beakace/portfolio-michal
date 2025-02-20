import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  imageWidth: number;
  imageHeight: number;
  href: string;
}
