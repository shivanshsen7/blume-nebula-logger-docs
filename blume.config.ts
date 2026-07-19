import { defineConfig } from "blume";

export default defineConfig({
  title: "Nebula Logger Docs (Blume Demo)",
  description:
    "An unofficial docs-site rebuild of Nebula Logger for Salesforce, built with Blume to showcase zero-config, AI-ready documentation for the Salesforce ecosystem.",
  // Fill in once you create the GitHub repo, e.g.:
  // deployment: {
  //   site: "https://<your-username>.github.io/nebula-logger-blume-demo",
  //   base: "/nebula-logger-blume-demo",
  // },
  navigation: {
    sidebar: [
      "/",
      "/for-developers",
      "/for-admins",
      "/for-architects",
      {
        label: "Guides",
        collapsed: true,
        items: [
          "/guides/architecture",
          "/guides/core-features",
          "/guides/plugin-framework",
          "/guides/build-a-plugin",
          "/guides/logging-in-apex",
          "/guides/logging-in-components",
          "/guides/logging-in-flow",
          "/guides/logging-in-omnistudio",
          "/guides/managing-logs",
          "/guides/logger-console-app",
          "/guides/related-log-entries-component",
          "/guides/log-entry-events-overview",
          "/guides/configuring-data-mask-rules",
          "/guides/configuring-global-features",
          "/guides/configuring-user-settings",
          "/guides/assigning-permission-sets",
          "/guides/deleting-old-logs",
          "/guides/custom-field-mappings",
          "/guides/package-dependencies-overview",
          "/guides/unlocked-vs-managed-package",
          "/guides/released-package-versions",
          "/guides/logging-troubleshooting",
          "/guides/slack-plugin",
          "/guides/dynamically-call-nebula-logger",
          "/guides/opentelemetry-api-integrations",
          "/guides/opentelemetry-rest-api",
        ],
      },
      {
        label: "Reference",
        collapsed: true,
        items: [
          "/reference/apex-logger-engine",
          "/reference/apex-log-management",
          "/reference/apex-configuration",
          "/reference/apex-plugins",
          "/reference/apex-test-utilities",
          "/reference/lightning-components",
          "/reference/data-model",
        ],
      },
      "/tagging-and-data",
      "/about-this-demo",
    ],
  },
});
