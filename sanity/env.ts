export const apiVersion = "2024-03-19";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "a6yeub3t";
export const useCdn = false;

// Export for easier imports
export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn,
};

console.log("Sanity Client Config:", { projectId, dataset, apiVersion });
