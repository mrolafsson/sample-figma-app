import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "../src"),
    };
    // Set base path for GitHub Pages deployment
    if (process.env.NODE_ENV === "production") {
      config.base = process.env.STORYBOOK_BASE_PATH || "/sample-figma-app/storybook/";
    }
    return config;
  },
};

export default config;
