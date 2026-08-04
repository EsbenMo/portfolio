import { InfoCard } from 'design-system';

export function Green() {
  return (
    <InfoCard
      badge="WCAG 2.1 AA"
      title="Colour isn't the only signal"
      description="Every piece of information conveyed through colour also exists in text, pattern, or shape."
    />
  );
}

export function Blue() {
  return (
    <InfoCard
      badge="Keyboard"
      badgeColor="blue"
      title="If you can't tab through it, it's broken"
      description="Every interactive element has a visible focus state. Skip links, logical tab order — not extras, but the interface itself."
    />
  );
}
