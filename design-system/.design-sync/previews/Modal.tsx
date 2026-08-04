import { Modal } from 'design-system';

export function Open() {
  return (
    <Modal
      open
      onClose={() => {}}
      number="Case 01"
      title="Accessible Patient Forms"
      org="NHS Digital · 2023"
      description="Redesigned the patient registration and referral forms used by 4M people annually. 18 research sessions led to a 34% drop in form abandonment."
      tags={['Accessibility', 'Research', 'Testing']}
    />
  );
}
