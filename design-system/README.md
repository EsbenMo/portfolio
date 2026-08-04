# Design System

React + TypeScript components extracted from the portfolio ([`../index.html`](../index.html)),
built on plain CSS custom properties (no Tailwind, no CSS-in-JS).

## Structure

- `src/tokens/tokens.css` — color, type, spacing, border, shadow, and motion tokens
- `src/components/<Name>/<Name>.tsx` + `.css` — one folder per component, co-located styles
- `src/components/index.ts` — barrel export
- `src/App.tsx` — living style guide showcasing every component/variant

## Components

Button, Tag, Badge, StatTile, SectionHeading, CaseCard, Modal, ProcessStep, InfoCard, Nav.

## Run locally

```bash
npm install
npm run dev
```

## Using with Claude Design

Point Claude Design at this folder — it reads the token file and component structure directly
and applies them to new generations. Finished designs package into a handoff bundle for Claude
Code, which can wire new components into this same `src/components/` structure.
