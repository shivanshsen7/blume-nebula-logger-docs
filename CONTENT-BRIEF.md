# Content brief: Blume × Salesforce demo

This is the guidance doc for drafting the blog post and LinkedIn post about this project. Hand this file, plus the live demo URL and this repo, to whatever agent/session is doing the actual writing — it has everything needed to draft without re-researching from scratch.

## The one-sentence story

"I took Nebula Logger — a beloved open-source Salesforce package with 935+ GitHub stars — and rebuilt its docs from scratch with a brand-new zero-config framework called Blume. It took an afternoon, not a sprint."

## Who this is for (and why each persona cares)

| Audience | What they'll recognize | The hook for them |
|---|---|---|
| Salesforce developers | Nebula Logger itself, Apex/LWC code samples | "Look, real code samples with tabs and copy buttons, and I didn't write a single React component." |
| Salesforce admins | Flow invocable actions, no-code angle | "Docs tools aren't just for developers — this is readable, searchable, and the Flow examples are front and center, not an afterthought." |
| Salesforce architects | Event-driven architecture, data model, unlocked-vs-managed trade-off | "This is the kind of institutional knowledge that usually lives in a wiki or a departed architect's head. Here it's a real page." |

Balance all three in both the blog post and the LinkedIn post — don't over-index on developers just because Blume itself is a dev tool.

## Verified facts to use (don't re-derive, just cite)

- **Blume**: open-source (MIT), released to npm July 14, 2026, created by Hayden Bleasel (an OpenAI developer). Built on Astro + Vite. Zero-config: `npx blume init` scaffolds a project; `blume build` produces a static site.
- **Speed, measured firsthand in this project**: `npx blume init` to a scaffolded project — instant. Full static build of a 6-page site — under 4 seconds real time (`blume build` output timed at ~3.5–5s including content sync, type generation, and static route generation).
- **Dependency footprint**: `npm install` pulls ~874 packages — worth a one-line honest caveat ("zero-config" isn't "zero dependencies").
- **Components verified hands-on, zero imports required**: `Tabs`/`Tab`, `CodeGroup` (multi-language tabs + copy-to-clipboard), `CardGroup`/`Card` (with icons), `Panel`. All rendered correctly on first try in this demo.
- **AI-native features, also verified working**: auto-generated `llms.txt` and `llms-full.txt`, every page additionally served as raw Markdown at `<page>.md`, a "Copy as Markdown" and "Open in chat" action on every page, `blume doctor` health-check command.
- **One real gotcha found during testing**: if a page's frontmatter has a `title` and the Markdown content also opens with an `# H1`, Blume renders both — a visible duplicate heading. Worth one honest line in a "what I'd tell you before you try it" section; it's an easy trap for anyone pasting existing README content in verbatim (which is exactly what this demo did on the first pass).
- **Nebula Logger, the real project**: MIT-licensed, 935+ GitHub stars, 237 forks, created and maintained by Jonathan Gillespie ("jongpie"). Spans Apex, LWC, Aura, Flow/Process Builder, and OmniStudio — genuinely one of the only Salesforce OSS tools that speaks to developers, admins, and architects at once, which is why it was chosen for this demo over a dev-only framework like fflib-apex-common.
- **This demo is unofficial** — not affiliated with or endorsed by Nebula Logger's maintainers. Full attribution and MIT license text reproduced in `ATTRIBUTION.md`. Always link back to the real repo (github.com/jongpie/NebulaLogger) and the real docs (jongpie.github.io/NebulaLogger) prominently — this is generous to the original project, not competing with it, and that framing matters for credibility with the Salesforce community (tight-knit, protective of good-faith attribution).

### The expansion pass (round two): a near-complete wiki, built by a 33-agent fan-out

After the first demo (6 persona pages), the scope was deliberately pushed further: the real Nebula Logger source repo and its wiki repo were both cloned locally, and a 33-subagent workflow (mixed Sonnet and Haiku models) fanned out to read the real source material and produce a much larger site:

- **26 "Guides" pages** — every single page from the real Nebula Logger wiki, adapted (not copy-pasted) into Blume MDX, one subagent per page.
- **7 "Reference" pages** — an Apex API reference synthesized from the project's actual ApexDocs-generated output (148 real Apex classes across 5 modules: Logger Engine, Log Management, Configuration, Plugins, Test Utilities), a Lightning Components reference, and a Data Model reference built from real custom object field metadata (Log__c has 101 real fields, LogEntry__c has 220 — genuinely large, enterprise-grade schemas).
- **40 total pages**, all built and verified in one clean `blume build` with zero errors after two rounds of fixes (see below).
- This is a genuinely good "before/after scale" story for a post: 6 pages by hand in an afternoon → 40 pages via a one-shot multi-agent fan-out in under 15 minutes of agent runtime, without any single person reading and rewriting 150 Apex classes and 26 wiki pages by hand.
- **Two honest findings from the real source, worth mentioning for credibility**: two of the real upstream wiki pages (`Configuring-Global-Features` and `Logging-in-OpenTelemetry-REST-API`) turned out to be unwritten "TODO" stubs — even the original maintainer hasn't gotten to them. Rather than having agents invent plausible-sounding content to fill the gap, the brief explicitly instructed them not to fabricate, and they either wrote honest "this is a stub upstream" placeholder pages or flagged it and asked for guidance rather than guessing. That's a good, concrete example of AI-assisted content work done carefully instead of hallucinated — worth a line in the post if the angle is at all about trustworthy AI-assisted documentation.
- **One real build bug surfaced and fixed**: several wiki pages had Markdown image references (`![...](./images/foo.png)`) pointing at local files that don't exist in the new site. Fixed by rewriting them to the real wiki's raw GitHub URLs (`raw.githubusercontent.com/wiki/jongpie/NebulaLogger/images/...`) instead of bundling copies — a reasonable "another honest caveat" for a build-log-style post.

## Suggested angle options (pick one primary, can reference others)

1. **"I rebuilt [popular OSS project]'s docs in an afternoon" — the demo-as-proof angle.** Most concrete, most shareable, plays well with screenshots/GIF.
2. **"Docs for the agent era" — the AI-native angle.** llms.txt, per-page Markdown, MCP server. Timely, differentiates from older tools (Docusaurus/GitBook), useful if the audience skews technical/architect.
3. **"Why does every Salesforce package's docs look like 2015?" — the pain-point angle.** Opens with the real, common frustration (wiki pages, stale Confluence, README-only projects), then introduces the fix. Good for admin/architect audience who feel this pain more than devs do.
4. **"I turned 148 Apex classes and 26 wiki pages into a docs site with 33 AI agents" — the scale/process angle.** Leads with the round-two expansion: real source code, real wiki, cloned locally, fanned out across dozens of subagents, assembled into 40 pages. This is the most technically impressive angle and probably the best fit if the goal is to also showcase agentic/AI workflows to the same audience, not just Blume. Pairs naturally with the "didn't fabricate the two TODO stubs" detail as proof of care.

## Suggested structure — LinkedIn post

- Hook: name-drop Nebula Logger (recognizable to the audience) + a surprising number (afternoon, ~4 seconds per build, 935 stars project with docs anyone can improve on)
- 2-3 short lines on what was actually done (rebuilt the docs, organized by persona, real components, real AI features) — no jargon dump
- One credibility line: unofficial, all credit to the original maintainer, link to the real repo
- Link to the live demo
- Soft CTA: invite comments/DMs from people who maintain their own Salesforce packages/internal tools and want the same treatment — this is the lead-gen angle if that's a goal
- Attach: 1-2 screenshots (dashboard/component-rich page + a before/after style shot if possible) or a short GIF of typing `npx blume init` → live site

## Suggested structure — blog post (longer form)

1. The problem: Salesforce ecosystem ships a lot of excellent open-source tooling with underinvested documentation (be specific and generous — this isn't a dig at any one project)
2. What Blume is and why it's relevant now (zero-config, AI-ready, open-source, brand new)
3. The build log — walk through what was actually done: `npx blume init`, dropping in Markdown, the persona-based structure decision, which components got used and how they rendered
4. Screenshots at each major step
5. Honest caveats section: dependency count, the duplicate-heading gotcha, anything else found during testing
6. The result: link to the live demo, link to the repo, invite people to fork it for their own package
7. Full attribution section, matching what's in `ATTRIBUTION.md`

## Raw source material available for the writing agent

- This repo's `docs/*.mdx` files — the actual demo content
- `ATTRIBUTION.md` — license/attribution language, reusable near-verbatim
- Screenshots already captured during testing (ask the orchestrating session for these, or regenerate via `npm run build` + a local static server + a headless browser)
- The live GitHub Pages URL once deployed (fill in after first deploy)

## Tone guardrails

- Confident but not hype-y — this audience (Salesforce technical folks) is allergic to generic "game-changer" AI-tool marketing language
- Concrete over abstract: cite the actual build time, the actual component list, the actual gotcha — specificity is what makes this credible instead of promotional
- Generous to the original project, never positions this as "better than" Nebula Logger's real docs — it's an homage/demo, and that has to come through in both posts
