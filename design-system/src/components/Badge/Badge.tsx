import type { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  color?: 'green' | 'red' | 'blue' | 'yellow' | 'orange';
  children: ReactNode;
};

export function Badge({ color = 'green', className, children, ...rest }: BadgeProps) {
  const classes = [
    'ds-badge',
    color !== 'green' ? `ds-badge--${color}` : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
