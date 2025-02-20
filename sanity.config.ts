"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  name: "default",
  title: "portfolio-michał",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schema.types,
  },
  basePath: "/studio",
});
