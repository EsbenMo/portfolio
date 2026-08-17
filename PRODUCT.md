# Product

## Register

brand

## Users

People deciding whether to hire Esben Mo, a senior IC UX/UI designer in Copenhagen, for a role or a project.

Two primary audiences, in this order:

1. **In-house hiring managers** at product companies hiring a senior individual contributor. They want evidence of depth, systems thinking, and how he works with engineering and stakeholders. They read closely but not for long.
2. **Recruiters and screeners**, usually non-specialists, filtering a stack of candidates. Time-to-comprehension is their whole experience. Domain jargon (SME, NDA, FNOL, WCAG, ARIA, underwriting) is a real barrier for them.

Both arrive cold, often from a link, frequently on mobile, and are deciding in well under a minute whether to keep reading. Danish and English speakers both.

The job to be done: answer "is this person good, and are they right for this?" without requiring the visitor to already be a designer.

## Product Purpose

A portfolio that has to prove design competence rather than assert it, under an unusual constraint: most of the strongest work is under NDA and cannot be shown.

The site's answer is to make the *process and the reasoning* the visible artifact where the product cannot be. Cases carry the problem, what he owned, what came out of it, and what he got wrong, alongside a 10-step process breakdown. Accessibility work is presented as receipts (a 22-item audit with success-criterion numbers) rather than as a claim.

Success: a hiring manager finishes a case and knows what Esben actually did and how he thinks; a recruiter gets to "yes, worth a conversation" without needing the vocabulary.

## Brand Personality

**Bold, direct, confident.**

Visual voice is committed neo-brutalism: five saturated card colours carrying real surface area, hard offset shadows, 3px black borders, no hedging toward safe neutrals. The design takes a position and holds it.

Copy voice is the counterweight and must stay in a senior IC register: plain, specific, no overselling. States what happened, names the constraint, admits the limit. Never "led", "spearheaded", or "transformed" where "designed", "ran", or "handed over" is true. Outcomes appear next to learnings, including failures. Confidence comes from precision, not volume.

Bilingual (English / Danish), with Danish held to the same standard as English, not machine-translated.

Punctuation: en dashes, used sparingly. No em dashes.

## Anti-references

- **Generic template portfolios.** Framer / Webflow marketplace layouts: same hero, same uniform card grid, interchangeable between designers.
- **Beige editorial minimalism.** Cream or sand backgrounds, display serif, thin tracked mono labels, ruled separators. The currently saturated AI aesthetic lane.
- **Dribbble mockup showcases.** Floating device renders and glossy shots with no problem framing, process, or outcome.
- **Agency-speak case studies.** Inflated impact numbers, "I led" on everything, no named constraints, no failures, no admission of what shifted.

## Design Principles

1. **Practice what you preach.** A portfolio arguing for accessible design has to pass its own audit. Any accessibility claim on the page must be verifiable on the page itself.
2. **Receipts over adjectives.** Show the success-criterion number, the screenshot, the thing that broke. Never a claim without evidence behind it.
3. **The constraint is content.** NDA is not a dead end to apologise for. Where the product cannot be shown, the problem, the reasoning, the constraints, and the outcome are the artifact.
4. **Name the limit.** Every case states what went wrong or what bounded it. Honesty is the differentiator against agency-speak.
5. **Legible to a non-designer.** A recruiter without the vocabulary must still be able to answer "is this person good?"

## Accessibility & Inclusion

WCAG 2.2 AA is the standard, self-audited and re-audited, with the report published on the site. This is both a requirement and a portfolio argument, so regressions are credibility failures, not just bugs.

- Full keyboard operability: focus trap in dialogs, Escape to close, focus returned to trigger, skip link.
- Focus indicators verified against every card background colour, not just white.
- `prefers-reduced-motion` honoured; the hero animation is also manually pausable.
- Content must never be gated behind JavaScript or scroll animation. It has to survive no-JS, print, and headless rendering.
- Target sizes meet WCAG 2.5.8 (24px minimum); 44px is the comfort goal.
- Both language versions must be equivalent in quality and completeness.
