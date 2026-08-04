import { Button } from 'design-system';

export function Primary() {
  return <Button variant="red">View my work</Button>;
}

export function Secondary() {
  return <Button variant="white">Get in touch</Button>;
}

export function Small() {
  return <Button variant="white" size="sm">View</Button>;
}

export function AsLink() {
  return <Button variant="red" href="#work">See the work →</Button>;
}
