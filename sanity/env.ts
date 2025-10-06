export const apiVersion = "2024-03-19";

// Support multiple env var names (Studio and App), and avoid crashing if missing
const env = process.env;
export const dataset =
  env.NEXT_PUBLIC_SANITY_DATASET ||
  env.SANITY_DATASET ||
  env.SANITY_STUDIO_DATASET ||
  "production";

export const projectId =
  env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  env.SANITY_PROJECT_ID ||
  env.SANITY_STUDIO_PROJECT_ID ||
  "";

export const useCdn = false;

export const hasSanityConfig = Boolean(projectId && dataset);

// Export for easier imports
export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn,
};
