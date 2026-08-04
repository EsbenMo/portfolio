import { CaseCard } from 'design-system';

export function Filled() {
  return (
    <CaseCard
      number="Case 01"
      title="Accessible Patient Forms"
      org="NHS Digital · 2023"
      description="Redesigned the patient registration and referral forms used by 4M people annually. 18 research sessions led to a 34% drop in form abandonment."
      tags={['Accessibility', 'Research', 'Testing']}
      accent="red"
      viewLabel="View case study: NHS Digital"
    />
  );
}

export function Yellow() {
  return (
    <CaseCard
      number="Case 02"
      title="Mobile Navigation Redesign"
      org="IKEA Digital · 2022"
      description="Led a 3-day co-design workshop to untangle a navigation structure that had grown over 12 years."
      tags={['UX Design', 'Workshops', 'Prototyping']}
      accent="yellow"
      viewLabel="View case study: IKEA"
    />
  );
}

export function Placeholder() {
  return (
    <CaseCard
      number="Case 02"
      title="Accessibility — design, testing and compliance"
      description="Write-up coming soon."
      placeholder
      viewLabel="View case study: Accessibility"
    />
  );
}
