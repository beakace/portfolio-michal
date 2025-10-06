import { createClient } from "next-sanity";
import { config } from "../env";

// Create a no-op client if config is incomplete to avoid crashes during local dev
export const client =
  config.projectId && config.dataset
    ? createClient(config)
    : ({
        fetch: async () => {
          return [];
        },
      } as unknown as ReturnType<typeof createClient>);

export const { dataset, projectId } = config;
