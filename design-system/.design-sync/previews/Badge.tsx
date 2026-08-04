import { Badge } from 'design-system';

export function Green() {
  return <Badge>WCAG 2.1 AA</Badge>;
}

export function Blue() {
  return <Badge color="blue">Keyboard</Badge>;
}

export function Row() {
  return (
    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
      <Badge color="green">Real users</Badge>
      <Badge color="blue">Keyboard</Badge>
      <Badge color="yellow">Screen readers</Badge>
      <Badge color="orange">Contrast</Badge>
      <Badge color="red">Audit</Badge>
    </div>
  );
}
