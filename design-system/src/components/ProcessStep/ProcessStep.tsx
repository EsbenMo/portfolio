import type { ReactNode } from 'react';
import './ProcessStep.css';

export type ProcessStepProps = {
  icon: ReactNode;
  name: ReactNode;
  description: ReactNode;
};

export function ProcessStep({ icon, name, description }: ProcessStepProps) {
  return (
    <div className="ds-step">
      <div className="ds-step-icon" aria-hidden="true">{icon}</div>
      <div className="ds-step-name">{name}</div>
      <p className="ds-step-desc">{description}</p>
    </div>
  );
}
