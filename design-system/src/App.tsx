import { useState } from 'react';
import {
  Badge,
  Button,
  CaseCard,
  InfoCard,
  Modal,
  Nav,
  ProcessStep,
  SectionHeading,
  StatTile,
  Tag,
} from './components';
import './App.css';

function ColorSwatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="guide-swatch">
      <div className="guide-swatch-color" style={{ background: `var(${varName})` }} />
      <div className="guide-swatch-label">{name}</div>
      <div className="guide-swatch-var">{varName}</div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="guide">
      <Nav
        logo="Esben"
        links={[
          { href: '#colors', label: 'Colors' },
          { href: '#type', label: 'Type' },
          { href: '#buttons', label: 'Buttons' },
          { href: '#cards', label: 'Cards' },
          { href: '#process', label: 'Process' },
          { href: '#info', label: 'Info Cards' },
        ]}
      />

      <header className="guide-hero">
        <p className="guide-eyebrow">Design System</p>
        <h1 className="guide-h1">Components, built once.</h1>
        <p className="guide-lede">
          Extracted from the portfolio's brutalist visual language — flat color blocks, thick
          borders, hard offset shadows — and rebuilt as reusable React components.
        </p>
      </header>

      <section id="colors" className="guide-section">
        <SectionHeading label="Tokens" title="Color" />
        <div className="guide-swatch-row">
          <ColorSwatch name="Red" varName="--color-red" />
          <ColorSwatch name="Yellow" varName="--color-yellow" />
          <ColorSwatch name="Blue" varName="--color-blue" />
          <ColorSwatch name="Green" varName="--color-green" />
          <ColorSwatch name="Orange" varName="--color-orange" />
          <ColorSwatch name="Studio Red" varName="--color-studio-red" />
          <ColorSwatch name="Black" varName="--color-black" />
        </div>
      </section>

      <section id="type" className="guide-section">
        <SectionHeading label="Tokens" title="Typography" />
        <div className="guide-type-row">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2rem' }}>
            Space Grotesk — Display
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>
            DM Sans — Body copy, for long-form reading like this line.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Space Mono — Labels &amp; Eyebrows
          </p>
        </div>
      </section>

      <section id="buttons" className="guide-section">
        <SectionHeading label="Components" title="Buttons &amp; Tags" />
        <div className="guide-row">
          <Button variant="red">Primary action</Button>
          <Button variant="white">Secondary action</Button>
          <Button variant="white" size="sm">Small</Button>
        </div>
        <div className="guide-row" style={{ marginTop: '1.5rem' }}>
          <Tag>Accessibility</Tag>
          <Tag>Research</Tag>
          <Tag>Testing</Tag>
          <Badge>WCAG 2.1 AA</Badge>
          <Badge color="blue">Keyboard</Badge>
        </div>
      </section>

      <section className="guide-section">
        <SectionHeading label="Components" title="Stats" />
        <div className="guide-stats">
          <StatTile value="8" label="Years in practice" color="var(--color-red)" />
          <StatTile value="40+" label="Projects shipped" color="var(--color-blue)" />
          <StatTile value="WCAG AA" label="Every project" color="var(--color-green)" valueFontSize="1.8rem" />
          <StatTile value="200+" label="Users interviewed" color="var(--color-yellow)" />
        </div>
      </section>

      <section id="cards" className="guide-section">
        <SectionHeading label="Components" title="Case card" />
        <div className="guide-case-grid">
          <CaseCard
            number="Case 01"
            title="Accessible Patient Forms"
            org="NHS Digital · 2023"
            description="Redesigned the patient registration and referral forms used by 4M people annually."
            tags={['Accessibility', 'Research', 'Testing']}
            accent="red"
            viewLabel="View case study: NHS Digital"
            onView={() => setModalOpen(true)}
          />
          <CaseCard
            number="Case 02"
            title="Mobile Navigation Redesign"
            org="IKEA Digital · 2022"
            description="Led a 3-day co-design workshop to untangle a navigation structure that had grown over 12 years."
            tags={['UX Design', 'Workshops', 'Prototyping']}
            accent="yellow"
            viewLabel="View case study: IKEA"
          />
        </div>
      </section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        number="Case 01"
        title="Accessible Patient Forms"
        org="NHS Digital · 2023"
        description="Redesigned the patient registration and referral forms used by 4M people annually. 18 research sessions led to a 34% drop in form abandonment."
        tags={['Accessibility', 'Research', 'Testing']}
      />

      <section id="process" className="guide-section guide-section--dark">
        <SectionHeading label="Components" title="Process step" tone="dark" />
        <div className="guide-steps">
          <ProcessStep icon="🔍" name="Research" description="Interviews, diary studies, analytics." />
          <ProcessStep icon="🧩" name="Workshops" description="Co-design sessions that align teams." />
          <ProcessStep icon="✏️" name="Prototyping" description="From sketch to clickable prototype." />
        </div>
      </section>

      <section id="info" className="guide-section guide-section--yellow">
        <SectionHeading label="Components" title="Info card" />
        <div className="guide-info-grid">
          <InfoCard
            badge="WCAG 2.1 AA"
            title="Colour isn't the only signal"
            description="Every piece of information conveyed through colour also exists in text, pattern, or shape."
          />
          <InfoCard
            badge="Keyboard"
            badgeColor="blue"
            title="If you can't tab through it, it's broken"
            description="Every interactive element has a visible focus state."
          />
        </div>
      </section>
    </div>
  );
}

export default App;
