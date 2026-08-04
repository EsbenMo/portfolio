import { Tag } from 'design-system';

export function Single() {
  return <Tag>Accessibility</Tag>;
}

export function Row() {
  return (
    <div style={{ display: 'flex', gap: '.4rem' }}>
      <Tag>Accessibility</Tag>
      <Tag>Research</Tag>
      <Tag>Testing</Tag>
    </div>
  );
}
