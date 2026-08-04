## Design language

Brutalist / neo-swiss: flat color blocks, thick black borders, hard offset (non-blurred) drop shadows, uppercase mono labels, confident display type. No rounded-soft or glassy/blurred-shadow treatments — they contradict the system.

## No wrapper or provider required

Components have no context dependency — import and render directly, no `<ThemeProvider>` or root wrapper needed. Tokens are plain CSS custom properties already in scope globally (loaded via `styles.css` at the design root).

## Styling idiom: CSS custom properties (tokens), not utility classes

There is no utility-class system (no `bg-*`/`gap-*` family) and no theme-prop API — style custom layout/spacing with these real token names, verified against the shipped `tokens/tokens.css`:

- **Color**: `--color-red`, `--color-yellow`, `--color-blue`, `--color-green`, `--color-orange`, `--color-black`, `--color-white`, `--color-studio-red`, plus neutrals `--color-ink-70/60/50/30/20` (darkest→lightest gray for body copy).
- **Type**: `--font-display` (Space Grotesk — headings, buttons, numerals), `--font-body` (DM Sans — paragraph copy), `--font-mono` (Space Mono — labels, eyebrows, tags, ALWAYS uppercase with `letter-spacing: var(--tracking-wide|wider|widest)`). Size scale `--text-2xs` through `--text-3xl`, plus fluid `--text-display-sm/md/lg` for hero/section titles.
- **Spacing**: `--space-1` (0.2rem) through `--space-13` (8rem) — use these instead of arbitrary rem values.
- **Borders & radius**: `--border-width-sm` (2px) / `--border-width-md` (3px) — this system's borders are always thick, never 1px. `--radius-sm/md` are small (2–3px), never fully rounded except `--radius-full` for dots/avatars.
- **Shadows**: `--shadow-sm/md/lg` are hard, non-blurred offset shadows (`4px 4px 0 var(--color-black)` etc) — the signature "pop" on buttons and cards on hover. Never substitute a blurred `box-shadow`.
- **Motion**: `--ease-smooth` for standard transitions; `--ease-bounce` is reserved for small playful accents (e.g. the hero's brick-drop-in) — don't apply it to routine hover/focus transitions.
- **Focus**: always `outline: var(--focus-ring); outline-offset: var(--focus-ring-offset);` on interactive elements — never remove focus outlines.

## Where the truth lives

Read `styles.css` (imports the token file + component CSS) and `tokens/tokens.css` before styling anything new. Each component's own CSS lives alongside it in `components/<group>/<Name>/` — check there for the established class pattern (`ds-<component>`, BEM-flat, no nesting) before inventing new class names.

## Composition example

```jsx
import { Button, CaseCard, SectionHeading, Tag } from 'design-system';

<>
  <SectionHeading label="Selected work" title="Projects. InsurTech" />
  <CaseCard
    number="Case 01"
    title="Accessible Patient Forms"
    org="NHS Digital · 2023"
    description="Redesigned the patient registration and referral forms used by 4M people annually."
    tags={['Accessibility', 'Research', 'Testing']}
    accent="red"
    viewLabel="View case study: NHS Digital"
  />
  <Button variant="red" href="#work">See the work →</Button>
</>
```

Dark sections (e.g. `ProcessStep`, `SectionHeading tone="dark"`) expect a `background: var(--color-black); color: var(--color-white);` ancestor — they don't set their own background.
