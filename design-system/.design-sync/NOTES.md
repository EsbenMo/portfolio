# design-sync notes — design-system

## Setup quirks

- No library build exists (`design-system` is a Vite **app**, not a published package) — every build runs in synth-entry mode: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./src/.no-dist.js --out ./ds-bundle`. The `--entry` path is a deliberately nonexistent file under `src/` — it exists only so the script walks up to find `design-system/package.json` for `PKG_DIR`; passing a real file there gets treated as an actual dist entry and skips synth-entry discovery entirely (learned the hard way — first build treated the app as tokens-only because `--entry ./src/components/index.ts` pointed at a real file).
- `cfg.srcDir` is set to `"src/components"`, NOT the default `"src"` — the app also has `App.tsx` (the local style-guide/showcase page) and `main.tsx` (bootstrap, calls `createRoot`) directly under `src/`. Scanning the whole `src/` tree sweeps those into the synthetic entry too, and `main.tsx`'s top-level `createRoot(...).render(...)` side effect runs the instant any preview HTML loads. Keep `srcDir` scoped to `src/components`.
- Fonts (Space Grotesk / DM Sans / Space Mono) load via a Google Fonts `@import url(...)` added to the top of `src/tokens/tokens.css` (which is `cfg.cssEntry`) — not shipped as local `.woff2`/`@font-face`. This is intentional (matches how the live portfolio loads fonts) and prints informational `[FONT_REMOTE]`, not `[FONT_MISSING]`. If the portfolio ever self-hosts fonts, add real files via `cfg.extraFonts` instead.
- `cfg.overrides.Modal: {"cardMode": "single", "viewport": "560x420"}` — Modal portals to `document.body` as a `position:fixed` overlay; without this it escapes/collapses in the grid card view.
- `cfg.overrides.Nav: {"cardMode": "column", "viewport": "1000x120"}` — Nav hides its link list under a 900px CSS breakpoint (`@media (max-width: 900px){.ds-nav-links{display:none}}`); the default grading-capture width is narrower than that, so without the explicit wide viewport the nav links exist in the DOM (render-check passes) but are invisible in the review screenshot.
- All 10 components are authored (not floor-card) — every one has a hand-written `.design-sync/previews/<Name>.tsx`, since there's no Storybook/docs source in this repo to generate from.

## Known render warns

None outstanding — final validate run was clean (0 bad, 0 thin, 0 variantsIdentical).

## Re-sync risks

- If a real library build (e.g. Vite library mode producing `dist/` + `.d.ts`) is ever added, re-syncs should switch from synth-entry to the real dist entry for stronger `.d.ts` contracts — current props are ts-morph-inferred from source, not from shipped declaration files.
- New components dropped into `src/components/<Name>/<Name>.tsx` are auto-discovered on the next sync (matches `srcDir`). New components need a preview authored in `.design-sync/previews/<Name>.tsx` or they'll ship as the floor card.
- If `App.tsx` or `main.tsx` ever move into `src/components/`, they'd be swept into the synth entry again — keep the showcase app code outside `srcDir`.
- The Google Fonts remote import is a network dependency for every design built with this DS — if Google Fonts is ever blocked/unavailable in the design agent's render environment, components will silently render in a fallback font.

## Re-sync command

```sh
node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules \
  --entry ./src/.no-dist.js --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json
```

(Re-copy `.ds-sync/` from the skill's bundled scripts first, and re-fetch `_ds_sync.json` from the project into `.design-sync/.cache/remote-sync.json` before running.)
