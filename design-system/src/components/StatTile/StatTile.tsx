import type { CSSProperties, ReactNode } from 'react';
import './StatTile.css';

export type StatTileProps = {
  value: ReactNode;
  label: ReactNode;
  color?: string;
  valueFontSize?: string;
};

export function StatTile({ value, label, color, valueFontSize }: StatTileProps) {
  const style: CSSProperties = {};
  if (color) style.color = color;
  if (valueFontSize) style.fontSize = valueFontSize;

  return (
    <div className="ds-stat">
      <div className="ds-stat-n" style={style}>{value}</div>
      <div className="ds-stat-l">{label}</div>
    </div>
  );
}
