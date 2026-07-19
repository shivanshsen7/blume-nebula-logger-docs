# Nebula Logger Docs — a Blume demo

A fan-made, unofficial docs site for [Nebula Logger](https://github.com/jongpie/NebulaLogger) (the popular open-source Salesforce observability framework), rebuilt from scratch with [Blume](https://useblume.dev) — a zero-config, AI-ready documentation framework.

**Live demo:** _(add your GitHub Pages URL here once deployed)_

## Why this exists

This repo is a working demonstration for Salesforce developers, admins, and architects: turning a good README into a real, searchable, dark-mode, AI-ready docs site doesn't have to be a project — it can be an afternoon with a Markdown folder and one CLI tool.

Content is organized in three tiers — 40 pages total:

- **Start here** (`docs/*.mdx`) — persona-routed entry points: overview, for-developers, for-admins, for-architects, tagging-and-data, about-this-demo
- **Guides** (`docs/guides/*.mdx`, 26 pages) — every page from the real [Nebula Logger wiki](https://github.com/jongpie/NebulaLogger/wiki), adapted into Blume MDX: Architecture, Core Features, Plugin Framework, Logging in Apex/Components/Flow/OmniStudio, Managing Logs, Console App, Data Mask Rules, Permission Sets, Troubleshooting, Package Dependencies, Unlocked vs. Managed, and more
- **Reference** (`docs/reference/*.mdx`, 7 pages) — Apex API reference synthesized from the project's real ApexDocs output (Logger Engine, Log Management, Configuration, Plugins, Test Utilities modules), a Lightning Components reference, and a Data Model reference built from the actual custom object field metadata

This was generated with a 33-agent fan-out (mixed Sonnet/Haiku) that read the real, cloned Nebula Logger source and wiki repos and adapted them page-by-page — nothing here was written from a summary or from memory. Two wiki source pages turned out to be unwritten "TODO" stubs upstream; rather than inventing content for them, this demo carries over honest placeholder pages that say so and link to related real content instead.

See [`ATTRIBUTION.md`](./ATTRIBUTION.md) for the license and credit to the original Nebula Logger project (MIT, © Jonathan Gillespie and contributors). **This is not the official Nebula Logger documentation** — for the real thing, go to [github.com/jongpie/NebulaLogger](https://github.com/jongpie/NebulaLogger).

**Note on images:** a handful of guide pages hotlink screenshots directly from the real wiki repo (`raw.githubusercontent.com/wiki/jongpie/NebulaLogger/...`) rather than bundling copies. These didn't render in this sandbox's headless test browser (its network policy blocks that host), but the URLs return valid images via direct HTTP fetch and should display normally for real visitors once deployed. Worth double-checking after your first deploy, and consider downloading them into the repo instead if you want to be independent of the upstream wiki.

## Running locally

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to ./dist
npm run doctor   # health check
```

Requires Node.js 22.12+.

## Deploying to GitHub Pages

1. Push this repo to GitHub (public repo recommended).
2. In `blume.config.ts`, uncomment and fill in the `deployment` block with your GitHub Pages URL:
   ```ts
   deployment: {
     site: "https://<your-username>.github.io/<repo-name>",
     base: "/<repo-name>",
   },
   ```
3. In the repo's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` — the included workflow at `.github/workflows/deploy.yml` builds and deploys automatically. First run may need to be triggered manually via the **Actions** tab (workflow_dispatch) if Pages wasn't enabled before the first push.

## Built with

- [Blume](https://useblume.dev) — zero-config, AI-ready documentation framework
- Content adapted from [Nebula Logger](https://github.com/jongpie/NebulaLogger) under MIT License
