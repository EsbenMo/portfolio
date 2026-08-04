import { Nav } from 'design-system';

export function Default() {
  return (
    <Nav
      logo="Esben"
      links={[
        { href: '#about', label: 'About' },
        { href: '#work', label: 'Work' },
        { href: '#process', label: 'Process' },
        { href: '#accessibility', label: 'Accessibility' },
        { href: '#contact', label: 'Contact' },
      ]}
    />
  );
}
