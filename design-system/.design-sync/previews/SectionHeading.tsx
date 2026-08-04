import { SectionHeading } from 'design-system';

export function Light() {
  return <SectionHeading label="Selected work" title="Projects. InsurTech" />;
}

export function Dark() {
  return (
    <div style={{ background: 'var(--color-black)', padding: '2rem' }}>
      <SectionHeading label="How I work" title="Research first. Always." tone="dark" />
    </div>
  );
}
