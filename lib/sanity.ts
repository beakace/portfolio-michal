import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a6yeub3t",
  dataset: "production",
  apiVersion: "2024-03-13",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional: only if you're using write features
});
