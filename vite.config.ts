// vite.config.ts
import { defineConfig } from "vite";
import dotenv from "dotenv";

export default defineConfig(() => {
  // Load environment variables based on the mode
  dotenv.config({ path: `.env` });

  const includeWebPlugin: boolean =
    process.env.VITE_INCLUDE_WEB_PLUGIN === "true";
  const includeCommunicationPlugin: boolean =
    process.env.VITE_INCLUDE_COMMUNICATION_PLUGIN === "true";
  return {
    plugins: [],
    resolve: {
      alias: {
        // Alias plugin imports to an empty module if they should not be included
        "./plugins/webPlugin": includeWebPlugin
          ? "./plugins/webPlugin"
          : "./plugins/emptyPlugin",
        "./plugins/communicationPlugin": includeCommunicationPlugin
          ? "./plugins/communicationPlugin"
          : "./plugins/emptyPlugin",
      },
    },
  };
});
