// src/loadPlugins.js

// Function to dynamically import a plugin based on the plugin name
async function loadPlugin(pluginName: string) {
  if (pluginName === "communication") {
    return import("./plugins/communicationPlugin.tsx");
  } else if (pluginName === "web") {
    return import("./plugins/webPlugin.tsx");
  }
  // Add more conditions as needed for additional plugins
}

export default loadPlugin;
