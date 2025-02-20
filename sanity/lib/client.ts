import { createClient } from "next-sanity";
import { config } from "../env";

export const client = createClient(config);
export const { dataset, projectId } = config;

// Debug log
console.log("Sanity Client:", {
  projectId,
  dataset,
  apiVersion: config.apiVersion,
});
