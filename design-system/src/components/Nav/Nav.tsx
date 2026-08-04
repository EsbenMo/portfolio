import './Nav.css';

export type NavLink = {
  href: string;
  label: string;
};

export type NavProps = {
  logo: string;
  logoAccent?: string;
  links: NavLink[];
};

export function Nav({ logo, logoAccent = '.', links }: NavProps) {
  return (
    <nav className="ds-nav" role="navigation" aria-label="Main navigation">
      <a href="#" className="ds-nav-logo" aria-label={`${logo} — home`}>
        {logo}
        <span>{logoAccent}</span>
      </a>
      <ul className="ds-nav-links" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
