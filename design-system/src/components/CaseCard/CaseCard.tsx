import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import './CaseCard.css';

export type CaseCardProps = {
  number: ReactNode;
  title: ReactNode;
  org?: ReactNode;
  description: ReactNode;
  placeholder?: boolean;
  tags?: string[];
  accent?: 'red' | 'yellow' | 'blue' | 'green';
  viewLabel: string;
  onView?: () => void;
};

export function CaseCard({
  number,
  title,
  org,
  description,
  placeholder = false,
  tags,
  accent,
  viewLabel,
  onView,
}: CaseCardProps) {
  const classes = ['ds-case', accent ? `ds-case--accent-${accent}` : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes}>
      <div className="ds-case-n">{number}</div>
      <h3 className="ds-case-title">{title}</h3>
      {org && <div className="ds-case-org">{org}</div>}
      <p className={['ds-case-desc', placeholder ? 'ds-case-desc--placeholder' : ''].filter(Boolean).join(' ')}>
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="ds-case-tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      <Button variant="white" size="sm" onClick={onView} aria-haspopup="dialog" aria-label={viewLabel}>
        View
      </Button>
    </article>
  );
}
