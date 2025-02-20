import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a6yeub3t",
  dataset: "production",
  apiVersion: "2024-03-13",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional: only if you're using write features
});

export async function sanityFetch<T>(query: string) {
  try {
    const data = await client.fetch<T>(query);
    console.log("Sanity fetch result:", data);
    return data;
  } catch (err) {
    console.error("Sanity fetch error:", err);
    throw err;
  }
}
