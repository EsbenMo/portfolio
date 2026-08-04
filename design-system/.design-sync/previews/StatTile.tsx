import { StatTile } from 'design-system';

export function Row() {
  return (
    <div style={{ display: 'flex' }}>
      <StatTile value="8" label="Years in practice" color="var(--color-red)" />
      <StatTile value="40+" label="Projects shipped" color="var(--color-blue)" />
      <StatTile value="WCAG AA" label="Every project" color="var(--color-green)" valueFontSize="1.8rem" />
      <StatTile value="200+" label="Users interviewed" color="var(--color-yellow)" />
    </div>
  );
}
