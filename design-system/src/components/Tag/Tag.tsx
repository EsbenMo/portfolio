import type { HTMLAttributes, ReactNode } from 'react';
import './Tag.css';

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Tag({ className, children, ...rest }: TagProps) {
  return (
    <span className={['ds-tag', className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
