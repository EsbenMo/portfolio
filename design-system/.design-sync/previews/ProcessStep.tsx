import { ProcessStep } from 'design-system';

export function Row() {
  return (
    <div style={{ background: 'var(--color-black)', color: 'var(--color-white)', display: 'flex' }}>
      <ProcessStep icon="🔍" name="Research" description="Interviews, diary studies, analytics. Understanding people before designing for them." />
      <ProcessStep icon="🧩" name="Workshops" description="Co-design sessions that align teams and surface constraints no brief ever mentions." />
      <ProcessStep icon="♿" name="Accessibility" description="WCAG audit, assistive tech, real users with disabilities. Built in, not bolted on." />
    </div>
  );
}
