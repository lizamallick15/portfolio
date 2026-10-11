import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ["About", "about"], ["Education", "education"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">{name.split(" ").map((word) => word[0]).join("")}</span>
          <span>{name}</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </nav>
    </header>
  );
}
