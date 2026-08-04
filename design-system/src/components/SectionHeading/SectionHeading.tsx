import type { ReactNode } from 'react';
import './SectionHeading.css';

export type SectionHeadingProps = {
  label: ReactNode;
  title: ReactNode;
  tone?: 'light' | 'dark';
  titleId?: string;
};

export function SectionHeading({ label, title, tone = 'light', titleId }: SectionHeadingProps) {
  return (
    <div className={tone === 'dark' ? 'ds-section-heading--dark' : ''}>
      <span className="ds-section-label">{label}</span>
      <h2 className="ds-section-title" id={titleId}>{title}</h2>
    </div>
  );
}
