import type { ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge/Badge';
import './InfoCard.css';

export type InfoCardProps = {
  badge: ReactNode;
  badgeColor?: BadgeProps['color'];
  title: ReactNode;
  description: ReactNode;
};

export function InfoCard({ badge, badgeColor, title, description }: InfoCardProps) {
  return (
    <div className="ds-info-card">
      <Badge color={badgeColor}>{badge}</Badge>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
