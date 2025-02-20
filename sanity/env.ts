export const apiVersion = "2024-03-19";
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const useCdn = false;

// Export for easier imports
export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn,
};

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

console.log("Sanity Client Config:", { projectId, dataset, apiVersion });
